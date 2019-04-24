import {Component, ViewChild} from '@angular/core';
import {LfFileStorage, LfStorage, LfI18n} from '@lightweightform/core';
import {AppComponent as LfAppComponent} from '@lightweightform/bootstrap-theme';
import { configure } from 'mobx';

configure({ isolateGlobalState: true });

@Component({
  selector: 'sc-root',
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {

  actions = [
    {
      id: 'save',
      style: 'outline-secondary',
      icon: 'save',
      callback: async () => {
        const dateStr = new Date().toISOString().replace(/:|\./g, '-');
        const fileName = `census-${dateStr}.json`;
        try {
          await this.lfStorage.saveToFile('/', fileName);
          console.log('Value saved successfully');
          this.lfStorage.setPristine('/');
        } catch (err) {
          console.error('Error saving file:', err);
        }
      },
    },
    {
      id: 'load',
      style: 'outline-secondary',
      icon: 'folder-open',
      isDisabled: !this.lfFileStorage.loadIsSupported,
      callback: async () => {
        try {
          await this.lfStorage.loadFromFile('/');
          console.log('Value loaded successfully');
        } catch (err) {
          console.error('Error loading file:', err);
        }
      },
    },
    {
      id: 'validate',
      style: 'outline-danger',
      icon: 'check-square-o',
      callback: () => this.lfApp.validate(),
    },
    {
      id: 'language',
      style: 'outline-success',
      icon: 'language',
      options: this.lfI18n.languages.map(lang => ({id: lang, value: lang})),
      callback: lang => this.lfI18n.setCurrentLanguage(lang),
    },
    {
      id: 'submit',
      text: "Submit",
      style: "outline-success",
      icon: "send",
      callback: () => {
        this.submit();
      }
    },
   /* {
      id: 'schema',
      label: 'Schema',
      faIcon: 'bug',
      isVertical: true,
      callback: () => {
        this._schemaModal.show();
      },
    },
    {
      id: 'value',
      label: 'Value',
      faIcon: 'bug',
      isVertical: true,
      callback: () => {
        this._valueModal.show();
      },
    },*/
  ];

  
  @ViewChild(LfAppComponent) private lfApp: LfAppComponent;
  /*Modals components*/
  //@ViewChild('valueModal') protected _valueModal: ModalComponent;
  //@ViewChild('schemaModal') protected _schemaModal: ModalComponent;

  constructor(
    public lfStorage: LfStorage,
    public lfI18n: LfI18n,
    private lfFileStorage: LfFileStorage,
  ) {}


  submit() {
    if (!this.lfStorage.hasErrors()) {
      fetch("https://selfcheckin.opensoft.pt/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.lfStorage.getAsJSON()),
        mode: "cors"
      })
        .then(response => {
          console.log(response);
          alert("Check-in successful. Enjoy your stay.");
        })
        .catch(ex => {
          console.log(ex);
          alert(ex);
        });
    } else {
      this.lfApp.validate();
    }
  }
}

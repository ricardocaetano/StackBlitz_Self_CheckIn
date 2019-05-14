# SelfCheckIn App
## LF starter guide

Welcome to <a href="https://bitbucket.org/opensoftgitrepo/lightweightform" target="_blank">Lightweightform (LF)</a>
an angular based open source web framework that simplifies the development of
complex web forms. It provides developers a set of libraries and resources
that alleviate the burden associated with complex form programming.

This guide will help you getting started with our framework and after you complete
the guide you will be able to start to develop amazing complex forms easily.

This guide is also available in the StackBlitz platform, to save you all the touble of installing all the required tools.

## Requirements-Local Version

- <a href="https://nodejs.org/en/" target="_blank">NodeJS and NPM</a>
- <a href="https://cli.angular.io/" target="_blank">Angular CLI</a> - install angular cli globally on npm `npm install -g @angular/cli`
- <a href="https://github.com/nodejs/node-gyp" target="_blank">node-gyp</a> - We use node sass loader that depends on node-gyp.

## Setup-Local Version

- <a href="https://bitbucket.org/opensoftgitrepo/lf-self-checkin" target="_blank">Self Check-In</a> - clone or download the self check-in app's repository
- Execute command `npm install`
- Start the application executing the command `ng serve cp1-begin`
- Navigate to <a href="http://localhost:4200/" target="_blank">http://localhost:4200/</a>


## Requirements-StackBlitz Version

- Internet connection when loading a new checkpoint, but after that you can work off-line and even fork the code to create your own Self-CheckIn or publish you difficulties in a certain point.

## Setup-StackBlitz Version

- In this option there is no setup to be made, simply click on the StackBlitz link present in each chapter and you will have access to the code present in each chapter and the respective solution. We advice you to try to do the exercises by yourself, the solution is only a support and is not unique, so in the end you may had a different, but still, working application. 



## Guide

In this starter example you will develop an LF based Self Check-in complex form.

Self Check-in is a hypothetical web-form where the Hotel/Guest House owner will gather information about its guests. Despite being a simple form, it is compliant with the local Hotel policies and demonstrates some LF features, like repeatable forms and validations. Have fun.

This guide is divided in six checkpoints:

- Define the structure of the application
- Fill the form components with LF fields
- Implement schema specifications for the LF fields
- Implement LF fields with computed values
- Customize computed values display
- Add form's actions to the LF application
- Add internationalization features in your LF application

### Checkpoint #1

_**Goal:** Define the structure of the application_

1.  Start the application executing the command `ng serve cp1-begin`
or if you are using  StackBlitz go to following link: <a href="https://stackblitz.com/github/PGSilvaOpensoft/StackBlitz_Self_CheckIn/tree/master/checkpoint1/cp1-begin" target="_blank">StackBlitz-CP1-Begin</a>

2.  Define the application's title ("LF Self check-in app")
3.	Define the application title and base root in the index.html file:

		/*index.html*/
		<head>
			...
			<base href="/"/>
			...
			<title>LF self check-in app</title>
			...
		</head>
	 
4. Define the lf-title, lf-tree-nav and router-outlet on the app.component.html
	
		/*app.component.html*/
		<lf-title>LF self check-in app</lf-title>
		<lf-tree-nav></lf-tree-nav>
		<router-outlet></router-outlet>
	 
	 
5. Now let´s define some base routes that will be used by your app to identify each element:

	5.1. Define the reservations-details component to be the default route of you app

	5.2. Declare the accomodation component as a child of the reservationDetails

	5.3. Declare food and other-services as children of the guest/:index2

	5.4. In the final your app routes should look like this:

		
		const routes: LfRoutes = [
			{path: '', redirectTo: reservationDetails, pathMatch: 'full'},
			{path: reservationDetails, component: reservationDetailsComponent},
			{
				path: reservationDetails,
				children: [
					{path: 'accomodation', component: AccommodationComponent},
				],
			},  
			{
				path: 'guests/:index',
				children: [
					{path: '', component: GuestComponent },
					{path: 'food', component: FoodComponent },
					{path: 'otherServices', component: OtherServicesComponent},
				],
			},
		];
	
6.  Add the first form of the application called reservation-detail:

    6.1. Generate component with angular cli `ng generate component components/reservation-detail` or if you are using StackBlitz left-click on the folder you want to create your element in and select `Angular Generator` and then `Componente`, then enter the component name and press enter.

	6.2. Create the reservervation-details.schema.ts and reservationDetails.en.US files
	
	6.3. Create the translation for the reservations-schema and add it the app.en.US file
	
		/*reservations-details.en-US.ts*/
		export const RESERVATION_DETAILS_I18N_EN_US = LfI18n.mergeTranslations({
			...
			'/reservationDetails': {
				label : "Reservation Details",
			},
			...
		});

		/*app.en.US.ts*/
		export const I18N_SELF_CHECK_IN_EN_US = LfI18n.mergeTranslations(
			...
			RESERVATION_DETAILS_I18N_EN_US,
			...
		);

	
	6.4. Now build the schema for the reservation-detail component and record it inside the appSchema

		/*reservationDetails.schema.ts*/
		export const reservationDetailsSchema = recordSchema({
			accomodation : accomodationSchema,
		},{isForm:true});
		
		/*app.schema.ts*/
		export const appSchema = recordSchema({
			reservationDetails: reservationDetailsSchema,
		});

	Note: don´t forget to declare the reservations-details as form by setting the `isForm` attribute to true
		 
7. Add a form, named "guest", to the application:

    7.1. Generate component with angular cli `ng generate component components/guests/components/guest` or in StackBlitz repeat the procedure of 6.1.

    7.2. Create the guest.schema.ts and guest.en-US.ts files
	
	7.3. Create the translation for the guest-schema and add it the app.en.US file
	
		/*guest.en-US.ts*/
		export const GUEST_I18N_EN_US = LfI18n.mergeTranslations({
			'/guests/?': {
			[I18N_VALUE_LABEL_KEY] : "Guest",
			},
		});

		/*app.en.US.ts*/
		export const I18N_SELF_CHECK_IN_EN_US = LfI18n.mergeTranslations(
			...
			GUEST_I18N_EN_US,
			...
		);

	7.4. Now build the schema for the guest component and record it inside the appSchema like in the step 6.4.

8.  Add a table form, called "guests", to the application:

    8.1. Generate component with angular cli `ng generate component components/guests` or in StackBlitz repeat the procedure of 6.1.
	
	8.2. Create the guests.schema.ts and guests.en-US.ts files

    8.3. Create the translation for the guests-schema and add it the app.en.US file

		export const GUESTS_I18N_EN_US = LfI18n.mergeTranslations({
			GUEST_I18N_EN_US,
			'/guests':{
				[I18N_VALUE_LABEL_KEY] : "Guests"
			},
		});

	Note: guests is a table form of guest forms, you need to need to merge the GUEST_I18N_EN_US inside the GUESTS_I18N_EN_US 

	
	8.4. Now build the schema for the guests component and record it inside the appSchema
		 
		/*guests.schema.ts*/
		export const guestsSchema  = tableSchema(guestSchema, {minSize:1})

		/*app.schema.ts*/
		export const appSchema = recordSchema({
			guests: guestsSchema,
		});

9.  Add a sub-form inside reservation-detail's component:

    9.1. Generate a sub form called "accommodation" (path: "components/reservation-detail/components/accommodation", name: "accommodation", label: "Accommodation")

	9.2. Create the accomodation.schema.ts and accomodation.en-US.ts files
	
	9.3. Create a tableSchema inside the accomodationSchema that will be used in the future to create a table
and put it inside the reservation-detail.schema
	
		/*accomodation.schema.ts*/
		export const accomodationSchema  = recordSchema({
			accomodationsTable: tableSchema(
				recordSchema({})
			),
		},{isForm:true});
			...
	
		/*reservationDetails.schema.ts*/
		export const reservationDetailsSchema = recordSchema({
			accomodation : accomodationSchema,
		},{isForm:true});
		
	
    9.4. Create the translation for the accomdation component and add it the app.en.US file and reservationDetails.en-US.
		 
			
		/*accomodation.en-US*/
		export const ACCOMODATION_I18N_EN_US = LfI18n.mergeTranslations({
			'/reservationDetails/accomodation':{
				[I18N_VALUE_LABEL_KEY] : "Accomodation",
			},
		});

		/*reservationDetails.en-US*/
		export const RESERVATION_DETAILS_I18N_EN_US = LfI18n.mergeTranslations({
			...
			ACCOMODATION_I18N_EN_US,
			...
		});

  	

10. In the same way, add two new sub forms to guest with the specification indicated below

	10.1.  Food component: path: "components/guests/components/guest/food"

	10.2.  Create Food schema and es-US files with name: "food", label: "Food"

	10.3.  Other Services component: path: "components/guests/components/guest/otherServices"

	10.4.  Create Other Services schema and es-US files with name: "otherServices", label: "Other Services"

	10.5.  Now you need to put the components inside the guests component as shown below

		/*guest.schema.ts*/
		export const guestSchema  = recordSchema({
			food: foodSchema, 
			otherServices : otherServicesSchema,   
		}, {isForm:true})

		...

		/*guest.es-US.ts*/
    	    export const GUEST_I18N_EN_US = LfI18n.mergeTranslations({
			...
			OTHER_SERVICES_I18N_EN_US,
			FOOD_I18N_EN_US,
			...
		});
    	
If you are using the StackBlitz version you can check the final solution <a href="https://stackblitz.com/github/PGSilvaOpensoft/StackBlitz_Self_CheckIn/tree/master/checkpoint1/cp1-end" target="_blank"> here </a>, but try to do it by your own :)

### Checkpoint #2

_**Goal:** Fill the form components with LF fields_

1.  Start the application executing the command `ng serve cp2-begin` or if you are using  StackBlitz go to following link: <a href="https://stackblitz.com/github/PGSilvaOpensoft/StackBlitz_Self_CheckIn/tree/master/checkpoint2/cp2-begin" target="_blank">StackBlitz-CP2-Begin</a>
2.  Add the fields below to reservation-detail component:

	All the display features are realized in the en-US files and the logic restrictions and input processment are declared in the schema,
	you need to consider that in order to write code using good pratices and separe the logic from display functionalities

    2.1. **lf-text** (name: "email", code: "1.1", label: "E-mail address", minLength: 1)
	
		
	
		/*reservation-detail.component.html*/
		...
			<lf-text path = "email"></lf-text>
		...

		/*reservation-detail.es-US.ts*/
		...
			'/reservationDetails/email': {
				code: "1.1",
				[I18N_VALUE_LABEL_KEY]: "E-mail",
			},
		...

		/*reservation-detail.schema.ts*/
		...
			email: stringSchema({}),
		...

	Note: the path you put on the html element needs to match the schema and 
		  the I18N file needs to have the right path otherwise no form elements will be displayed

    2.2. **lf-text** (name: "phone", code: "1.2", label: "Phone Number", minLength: 1)

    2.3. **lf-date-range** (name: "checkincheckout", code: "1.3", label: "Check-in / Check-out", isRequired: true)

    2.4. **lf-number** (name: "arrivalHour", code: "1.4", label: "Hour of arrival")

    2.5. **lf-text** (name: "flightNumber", code:"1.5", label: "Flight Number")

3.  Add three tables for each meal on the food component using the sc-food-table previously created:


		/*food.component.html*/
		...
			<sc-food-table #breakfastTable path="breakfastTable"></sc-food-table>
			<sc-food-table #lunchTable path="lunchTable"></sc-food-table>
			<sc-food-table #dinnerTable path="dinnerTable"></sc-food-table>
		...

		/*food.schemas.ts*/
		...
			...foodTableSchema('breakfastTable'),
			...foodTableSchema('lunchTable'),
			...foodTableSchema('dinnerTable'),
		...

		/*food.es-US.ts*/
		export const FOOD_I18N_EN_US =  LfI18n.mergeTranslations({
		...
			FOOD_TABLE_I18N_EN_US,
		...
		})

If you are using the StackBlitz version you can check the final solution <a href="https://stackblitz.com/github/PGSilvaOpensoft/StackBlitz_Self_CheckIn/tree/master/checkpoint2/cp2-end" target="_blank"> here </a>

### Checkpoint #3

_**Goal:** Implement schema specifications for the LF fields_

1.  Start the application executing the command `ng serve cp3-begin` or if you are using  StackBlitz go to following link: <a href="https://stackblitz.com/github/PGSilvaOpensoft/StackBlitz_Self_CheckIn/tree/master/checkpoint3/cp3-begin" target="_blank">StackBlitz-CP3-Begin</a>.
2.  Add a minimum of 18 years old schema specification to the "birthDate" field on the guest component

    	/* guest.schema.ts */
		...
		birthDate: dateSchema({
			isRequired : true,
			isNullable : true,
			validate: has18PlusYears,
		}),
		...
		
3. Add a internationalization error message that will be dislay later when the form validation fails
	

		/*guest.en-US*/
		...
		'/guests/?/birthDate':{
			[I18N_VALUE_LABEL_KEY]: 'Date of Birth',
			validations: {
				INVALID_AGE: 'You need to have at least 18 years old to do you Self-Check-In.',
			},
		},
		...

	Note: The code of the error thrown in the schema file need to match the the validations atribute

4.  Add an e-mail schema specification to the "email" field on the reservation-detail component similar to point 2. You can use the function commented in the schema to validate the e-mail.

5.  Add a max length schema specification to the "flightNumber" field in reservation-detail

		/*reservation-detail.schema.ts*/
		...
		flightNumber: numberSchema({
			max : 1000000,
			Required : true,
			isNullable : true,
		}),
		...


6.  Add min and max schema specifications to the "arrivalHour" field on the reservation-detail component

		/*reservation-detail.schema.ts*/
		...
			hourOfArrival: numberSchema({
			min: 0,
			max:23,
			Required : true,
			isNullable : true,
		}),
		...

7.  Add a schema specification to the "personalTrainer" field in other-services, so that the field is only required if the guest opts for gym service
	
		...
		h3Number : numberSchema({
			isRequired : asksForGymService,
			isNullable : true,
			min : 0,
		}),
		...
	Tip: Create a function that checks if the personal trainer radio is set to Y

If you are using the StackBlitz version you can check the final solution <a href="https://stackblitz.com/github/PGSilvaOpensoft/StackBlitz_Self_CheckIn/tree/master/checkpoint3/cp3-end" target="_blank"> here </a>.

### Checkpoint #4

_**Goal:** Implement LF fields with computed values_

1.  Start the application executing the command `ng serve cp4-begin` or if you are using  StackBlitz go to following link: <a href="https://stackblitz.com/github/PGSilvaOpensoft/StackBlitz_Self_CheckIn/tree/master/checkpoint4/cp4-begin" target="_blank">StackBlitz-CP4-Begin</a>.
2.  Notice the existing function "computedPrice" in the "foodTable" component
3.  Make the value of the field "price" of "foodTable" depend on the "typeFood" field value, using the "computedPrice" function

		/*food-table.component.html*/
		...
			<lf-table #lfTable [path]="path">
				...
				<lf-table-header>
					...
					<lf-table-column id = "price"></lf-table-column>
					...
				</lf-table-header>
				
				...
			
				<tr lfTableRow [path]="id" >
					...
					<td lfTableCell><lf-number path="price"></lf-number></td>
					...
				</tr>
			...
			</lf-table>
			<lf-number [path]="subTotalName"></lf-number>
		...

		/*food-table.schema.ts*/
		...
			price : numberSchema({
                ...
				computedValue: computedPrice
				...
			}),
		...

4.  Notice the "subTotal" computed getter function of the "food-table" component that returns the sum total of the the "food-table"'s prices
5.  Repeat the process of point 3. to create a html element that calculates the subTotalPrice:
	
		/*food-table.component.html*/
		...
			<lf-table #lfTable [path]="path">
				...
			</lf-table>
			<lf-number [path]="subTotalName"></lf-number>
		...

6.  Set the field "totalPrice" of "food" as computed, using the existing "totalPrice" function.

If you are using the StackBlitz version you can check the final solution <a href="https://stackblitz.com/github/PGSilvaOpensoft/StackBlitz_Self_CheckIn/tree/master/checkpoint4/cp4-end" target="_blank"> here </a>.

### Checkpoint #5

_**Goal:** Customize values display_

1.  Start the application executing the command `ng serve cp5-begin` or if you are using  StackBlitz go to following link: <a href="https://stackblitz.com/github/PGSilvaOpensoft/StackBlitz_Self_CheckIn/tree/master/checkpoint5/cp5-begin" target="_blank">StackBlitz-CP5-Begin</a>.

2.  Let's format the computed values to make our self check-in application look better

3.  Add the following fields to "totalPrice" in "food", and notice the changes on the value's formatting

		/*food-table.component.html*/
		...
			<lf-table-column id = "price" [scale] = 2 ></lf-table-column>
		...
		
		/*food-table.en-US.ts*/
		...
		
		'/guests/?/?/?/?/price':{
			decimalSeparator : ",",
			[I18N_NUMBER_THOUSANDS_SEPARATOR_KEY] : ".",
			suffix : " $",
		},
		
		...
		
		'/guests/?/?/subTotalbreakfastTable':{
			decimalSeparator : ',',
			[I18N_NUMBER_THOUSANDS_SEPARATOR_KEY] : ".",
			suffix : " $",
		},
			
		... (repeate for subTotallunchTable and subTotaldinnerTable)

4.  Add the same fields to "price" in "food-table"


If you are using the StackBlitz version you can check the final solution <a href="https://stackblitz.com/github/PGSilvaOpensoft/StackBlitz_Self_CheckIn/tree/master/checkpoint5/cp5-end" target="_blank"> here </a>.

### Checkpoint #6

_**Goal:** Add form's actions to the LF application_

1.  Start the application executing the command `ng serve cp6-begin` or if you are using  StackBlitz go to following link: <a href="https://stackblitz.com/github/PGSilvaOpensoft/StackBlitz_Self_CheckIn/tree/master/checkpoint6/cp6-begin" target="_blank">StackBlitz-CP6-Begin</a>.
2.  Understand how to add actions, such as load, save and submit to the self check-in application
3.  Add a save action to save the form content to a file, making the modifications below:

        /*app.component.html*/
		...
			<lf-app [actions]="actions">...</lf-app>
		...
		
       	/* app.component.ts */
		...
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
		];
		...


4.  Add a load action to load the form content from a file, using the code below:

		/* app.component.ts */
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
   
	
5. Add a validate action to validate the form content, using the code below:

		/* app.component.ts */
		...
      	id: 'validate',
      	style: 'outline-danger',
      	icon: 'check-square-o',
      	callback: () => this.lfApp.validate(),
		...

6. Add a submit action to submit the form content to a server, using the code below:

      	/* app.component.ts */
		...
		id: 'submit',
      	text: "Submit",
      	style: "outline-success",
     	icon: "send",
     	callback: () => {
       		this.submit();
      	}
    	...

If you are using the StackBlitz version you can check the final solution <a href="https://stackblitz.com/github/PGSilvaOpensoft/StackBlitz_Self_CheckIn/tree/master/checkpoint6/cp6-end" target="_blank"> here </a>.

### Checkpoint #7

_**Goal:** Add form's language options to the LF application_

In this demonstration we choose to use the Portugues language as an example, but you can do it for every language.
We also separated the .pt-Pt and .en-Us for each component for a  simple comprehension but we can have everything in a single file. 

1. Start the application executing the command `ng serve cp7-begin` or if you are using  StackBlitz go to following link: <a href="https://stackblitz.com/github/PGSilvaOpensoft/StackBlitz_Self_CheckIn/tree/master/checkpoint7/cp7-begin" target="_blank">StackBlitz-CP7-Begin</a>.
2. Start by adding a new language provider in the app.module.ts

		...
		/*app.module.ts*/
		providers: [
			...
			{provide: LF_APP_I18N, useValue: {'pt-PT': I18N_SELF_CHECK_IN_PT, 'en-US' : I18N_SELF_CHECK_IN_EN_US}},
			...
		],
		...

	
3. Now you need to associate the language to the select button that will permit you to change the application language

		...
		/*app.en.US*/
		...
		'*':{
			...
			actionsMenuOptions: {
				language: {
					'en-US': 'English',
					'pt-PT': 'Portuguese',
				},
			},
		...
		}

4. Now you need to fill all the .pt-PT.ts files similiar to the .en-US that are all made in the checkpoint,
5. We suggest you copy the .en-US.ts file to the correspondent .pt-Pt.ts file and translate all the labels.

If you are using the StackBlitz version you can check the final solution <a href="https://stackblitz.com/github/ricardocaetano/StackBlitz_Self_CheckIn/tree/master/checkpoint7/end" target="_blank"> here </a>.

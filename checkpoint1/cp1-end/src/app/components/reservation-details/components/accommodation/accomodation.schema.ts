import { recordSchema, tableSchema} from "@lightweightform/storage";

export const accomodationSchema  = recordSchema({
  accomodationsTable: tableSchema(
    recordSchema({
        
      }
    )
  ),
}, {isForm : true}
);
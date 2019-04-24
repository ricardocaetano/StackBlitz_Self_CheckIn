import { recordSchema, listSchema} from "@lightweightform/storage";

export const accomodationSchema  = recordSchema({
  accomodationsTable: listSchema(
    recordSchema({
        
      }
    )
  ),
}, {isForm : true}
);
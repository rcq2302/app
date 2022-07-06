import UtentiModelGenerated from "./generated/UtentiModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = UtentiModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await UtentiModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...UtentiModelGenerated,
  ...customModel
};

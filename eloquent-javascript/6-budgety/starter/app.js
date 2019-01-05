// iife allows data privacy
// BUDGET CONTROLLER
var budgetController = (function() {
  var Expense = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };

  console.log(data.allItems.exp)
  return {
    addItem: function(type, desc, val){
      var newItem, ID;

      // Creates new ID
      if (data.allItems[type].length > 0){
        ID = data.allItems[type][data.allItems[type].length-1].id + 1;
      } else {
        ID = 0;
      }
      // Creates new item based on 'inc' or 'exp' type
      if (type === 'exp'){
        newItem = new Expense(ID, desc, val);
      } else if (type === 'inc'){
        newItem = new Income(ID, desc, val);
      }
      // Push new item into data structure
      data.allItems[type].push(newItem);
      // Return new item
      return newItem;
    }
  };
})();

// UI CONTROLLER
var uiController = (function() {
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputButton: '.add__btn'
  };
  return {
    getInput: function(){
      return {
        type: document.querySelector(DOMstrings.inputType).value, // will be either 'inc' or 'exp'
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    // addListItem: function(obj, type){
      // Create html string with placeholder text
      // Replace placeholder with actual data
      // Insert the html into DOM
    // }
    // exposes DOMstrings to public
    getDOMstrings: function(){
      return DOMstrings;
    }
  }
})();

// GLOBAL APP CONTROLLER
// pass controllers into global app controller
var controller = (function(budgetCtrl, uiCtrl) {
  // pass other two modules into this controller
  var setupEventListeners = function(){
    // not an iife and will need to be called. see init function
    var DOM = uiCtrl.getDOMstrings(); // retrieves DOMstrings from UI Controller

    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
    // allows input data submission with 'enter'
    document.addEventListener('keypress', function(event){
      var key = event.which || event.keyCode;
      if (key === 13){
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function(){
    var input, newItem;
    // 1. Get the field input data
    input = uiCtrl.getInput();
    // 2. Add the item to the budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
  };

  return {
    // make function public by returning
    init: function(){
      console.log('Application has started');
      setupEventListeners(); // originally in an iife
    }
  }

})(budgetController, uiController);

controller.init(); // without this line of code, nothing will happen

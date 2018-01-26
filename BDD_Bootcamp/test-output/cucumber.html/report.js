$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("What_Can_I_Afford.feature");
formatter.feature({
  "line": 1,
  "name": "What can I afford - Auto Calculator",
  "description": "",
  "id": "what-can-i-afford---auto-calculator",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to calculate the ideal range for buying a car",
  "description": "",
  "id": "what-can-i-afford---auto-calculator;user-should-be-able-to-calculate-the-ideal-range-for-buying-a-car",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User navigates to the Edmunds Calculator WebPage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"\u003cMonthly_Payment\u003e\" in Monthly Payment Field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks Go Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters \"\u003cZip_Code\u003e\" in Zip Code Field",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User selects \"\u003cLoan_Term\u003e\" in Loan Term Drop Down Box",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters \"\u003cMarket_Finance_Rate\u003e\" in Finance Rate Field",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters \"\u003cTrade-In_Value\u003e\" in Trade in Value Field",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters \"\u003cAmount_Owed\u003e\" in Amounted Owed Field",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters \"\u003cCash_Down_Payment\u003e\" in Cash Down Payment Field",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User clicks Calculate Button",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "what-can-i-afford---auto-calculator;user-should-be-able-to-calculate-the-ideal-range-for-buying-a-car;",
  "rows": [
    {
      "cells": [
        "Monthly_Payment",
        "Zip_Code",
        "Loan_Term",
        "Market_Finance_Rate",
        "Trade-In_Value",
        "Amount_Owed",
        "Cash_Down_Payment"
      ],
      "line": 19,
      "id": "what-can-i-afford---auto-calculator;user-should-be-able-to-calculate-the-ideal-range-for-buying-a-car;;1"
    },
    {
      "cells": [
        "200",
        "22030",
        "36 months",
        "2.8",
        "10000",
        "0",
        "1000"
      ],
      "line": 20,
      "id": "what-can-i-afford---auto-calculator;user-should-be-able-to-calculate-the-ideal-range-for-buying-a-car;;2"
    },
    {
      "cells": [
        "300",
        "22031",
        "48 months",
        "3.5",
        "11000",
        "1000",
        "2000"
      ],
      "line": 21,
      "id": "what-can-i-afford---auto-calculator;user-should-be-able-to-calculate-the-ideal-range-for-buying-a-car;;3"
    },
    {
      "cells": [
        "400",
        "22032",
        "60 months",
        "3.8",
        "12000",
        "500",
        "3000"
      ],
      "line": 22,
      "id": "what-can-i-afford---auto-calculator;user-should-be-able-to-calculate-the-ideal-range-for-buying-a-car;;4"
    },
    {
      "cells": [
        "500",
        "22030",
        "72 months",
        "4.0",
        "13000",
        "2000",
        "4000"
      ],
      "line": 23,
      "id": "what-can-i-afford---auto-calculator;user-should-be-able-to-calculate-the-ideal-range-for-buying-a-car;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4627961963,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should be able to calculate the ideal range for buying a car",
  "description": "",
  "id": "what-can-i-afford---auto-calculator;user-should-be-able-to-calculate-the-ideal-range-for-buying-a-car;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User navigates to the Edmunds Calculator WebPage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"200\" in Monthly Payment Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks Go Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters \"22030\" in Zip Code Field",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User selects \"36 months\" in Loan Term Drop Down Box",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters \"2.8\" in Finance Rate Field",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters \"10000\" in Trade in Value Field",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters \"0\" in Amounted Owed Field",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters \"1000\" in Cash Down Payment Field",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User clicks Calculate Button",
  "keyword": "Then "
});
formatter.match({
  "location": "test.Calculator_WebPage_Verify()"
});
formatter.result({
  "duration": 123470551,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Monthly_Payment_Field(String)"
});
formatter.result({
  "duration": 104862630,
  "status": "passed"
});
formatter.match({
  "location": "test.Go_Button_Click()"
});
formatter.result({
  "duration": 5124978569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22030",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Zip_Code_Field(String)"
});
formatter.result({
  "duration": 81466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36 months",
      "offset": 14
    }
  ],
  "location": "test.user_selects_in_Loan_Term_Drop_Down_Box(String)"
});
formatter.result({
  "duration": 64563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.8",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Finance_Rate_Field(String)"
});
formatter.result({
  "duration": 58825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Trade_in_Value_Field(String)"
});
formatter.result({
  "duration": 48505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Amounted_Owed_Field(String)"
});
formatter.result({
  "duration": 89318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Cash_Down_Payment_Field(String)"
});
formatter.result({
  "duration": 71825,
  "status": "passed"
});
formatter.match({
  "location": "test.user_clicks_Calculate_Button()"
});
formatter.result({
  "duration": 21286,
  "status": "passed"
});
formatter.after({
  "duration": 321272199,
  "status": "passed"
});
formatter.before({
  "duration": 1635616089,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should be able to calculate the ideal range for buying a car",
  "description": "",
  "id": "what-can-i-afford---auto-calculator;user-should-be-able-to-calculate-the-ideal-range-for-buying-a-car;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User navigates to the Edmunds Calculator WebPage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"300\" in Monthly Payment Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks Go Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters \"22031\" in Zip Code Field",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User selects \"48 months\" in Loan Term Drop Down Box",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters \"3.5\" in Finance Rate Field",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters \"11000\" in Trade in Value Field",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters \"1000\" in Amounted Owed Field",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters \"2000\" in Cash Down Payment Field",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User clicks Calculate Button",
  "keyword": "Then "
});
formatter.match({
  "location": "test.Calculator_WebPage_Verify()"
});
formatter.result({
  "duration": 5998651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Monthly_Payment_Field(String)"
});
formatter.result({
  "duration": 222869094,
  "status": "passed"
});
formatter.match({
  "location": "test.Go_Button_Click()"
});
formatter.result({
  "duration": 6197021546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22031",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Zip_Code_Field(String)"
});
formatter.result({
  "duration": 104340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "48 months",
      "offset": 14
    }
  ],
  "location": "test.user_selects_in_Loan_Term_Drop_Down_Box(String)"
});
formatter.result({
  "duration": 80570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3.5",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Finance_Rate_Field(String)"
});
formatter.result({
  "duration": 95125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11000",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Trade_in_Value_Field(String)"
});
formatter.result({
  "duration": 88383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Amounted_Owed_Field(String)"
});
formatter.result({
  "duration": 73288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Cash_Down_Payment_Field(String)"
});
formatter.result({
  "duration": 48638,
  "status": "passed"
});
formatter.match({
  "location": "test.user_clicks_Calculate_Button()"
});
formatter.result({
  "duration": 20028,
  "status": "passed"
});
formatter.after({
  "duration": 255879235,
  "status": "passed"
});
formatter.before({
  "duration": 4124587780,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should be able to calculate the ideal range for buying a car",
  "description": "",
  "id": "what-can-i-afford---auto-calculator;user-should-be-able-to-calculate-the-ideal-range-for-buying-a-car;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User navigates to the Edmunds Calculator WebPage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"400\" in Monthly Payment Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks Go Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters \"22032\" in Zip Code Field",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User selects \"60 months\" in Loan Term Drop Down Box",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters \"3.8\" in Finance Rate Field",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters \"12000\" in Trade in Value Field",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters \"500\" in Amounted Owed Field",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters \"3000\" in Cash Down Payment Field",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User clicks Calculate Button",
  "keyword": "Then "
});
formatter.match({
  "location": "test.Calculator_WebPage_Verify()"
});
formatter.result({
  "duration": 16881872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Monthly_Payment_Field(String)"
});
formatter.result({
  "duration": 130328789,
  "status": "passed"
});
formatter.match({
  "location": "test.Go_Button_Click()"
});
formatter.result({
  "duration": 5420646461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22032",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Zip_Code_Field(String)"
});
formatter.result({
  "duration": 70379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60 months",
      "offset": 14
    }
  ],
  "location": "test.user_selects_in_Loan_Term_Drop_Down_Box(String)"
});
formatter.result({
  "duration": 53452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3.8",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Finance_Rate_Field(String)"
});
formatter.result({
  "duration": 91628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12000",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Trade_in_Value_Field(String)"
});
formatter.result({
  "duration": 54381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Amounted_Owed_Field(String)"
});
formatter.result({
  "duration": 54874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Cash_Down_Payment_Field(String)"
});
formatter.result({
  "duration": 60258,
  "status": "passed"
});
formatter.match({
  "location": "test.user_clicks_Calculate_Button()"
});
formatter.result({
  "duration": 18013,
  "status": "passed"
});
formatter.after({
  "duration": 318614312,
  "status": "passed"
});
formatter.before({
  "duration": 4171612270,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should be able to calculate the ideal range for buying a car",
  "description": "",
  "id": "what-can-i-afford---auto-calculator;user-should-be-able-to-calculate-the-ideal-range-for-buying-a-car;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User navigates to the Edmunds Calculator WebPage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"500\" in Monthly Payment Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks Go Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters \"22030\" in Zip Code Field",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User selects \"72 months\" in Loan Term Drop Down Box",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters \"4.0\" in Finance Rate Field",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters \"13000\" in Trade in Value Field",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters \"2000\" in Amounted Owed Field",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters \"4000\" in Cash Down Payment Field",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User clicks Calculate Button",
  "keyword": "Then "
});
formatter.match({
  "location": "test.Calculator_WebPage_Verify()"
});
formatter.result({
  "duration": 6935367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Monthly_Payment_Field(String)"
});
formatter.result({
  "duration": 112955236,
  "status": "passed"
});
formatter.match({
  "location": "test.Go_Button_Click()"
});
formatter.result({
  "duration": 7238278832,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22030",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Zip_Code_Field(String)"
});
formatter.result({
  "duration": 80304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "72 months",
      "offset": 14
    }
  ],
  "location": "test.user_selects_in_Loan_Term_Drop_Down_Box(String)"
});
formatter.result({
  "duration": 49680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4.0",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Finance_Rate_Field(String)"
});
formatter.result({
  "duration": 41288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13000",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Trade_in_Value_Field(String)"
});
formatter.result({
  "duration": 72187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Amounted_Owed_Field(String)"
});
formatter.result({
  "duration": 69645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 13
    }
  ],
  "location": "test.user_enters_in_Cash_Down_Payment_Field(String)"
});
formatter.result({
  "duration": 84673,
  "status": "passed"
});
formatter.match({
  "location": "test.user_clicks_Calculate_Button()"
});
formatter.result({
  "duration": 26654,
  "status": "passed"
});
formatter.after({
  "duration": 243739109,
  "status": "passed"
});
});
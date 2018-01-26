Feature: What can I afford - Auto Calculator


Scenario Outline: User should be able to calculate the ideal range for buying a car

	Given User navigates to the Edmunds Calculator WebPage
	When User enters "<Monthly_Payment>" in Monthly Payment Field
	And User clicks Go Button
	Then User enters "<Zip_Code>" in Zip Code Field
	Then User selects "<Loan_Term>" in Loan Term Drop Down Box
	Then User enters "<Market_Finance_Rate>" in Finance Rate Field
	Then User enters "<Trade-In_Value>" in Trade in Value Field
	Then User enters "<Amount_Owed>" in Amounted Owed Field
	Then User enters "<Cash_Down_Payment>" in Cash Down Payment Field
	Then User clicks Calculate Button
	
	
	Examples:
	|Monthly_Payment|Zip_Code|Loan_Term|Market_Finance_Rate|Trade-In_Value|Amount_Owed|Cash_Down_Payment|
	|200				|22030	 |36 months|2.8				  |10000			 |0			|1000			  |
	|300				|22031	 |48 months|3.5				  |11000			 |1000		|2000			  |
	|400				|22032	 |60 months|3.8				  |12000			 |500		|3000			  |
	|500				|22030	 |72 months|4.0				  |13000			 |2000		|4000			  |
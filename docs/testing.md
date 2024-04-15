# Testing

## Test Plan
| Test case ID | Test type |	Description                                 |	Scenario |
| -------------| ----------| -------------------------------------------  | ---------|
|TF1.1	       |UAT      | 	Requests permission to access user location | <ol><li>User clicks "Find nearest toilet"<li>Confirmation box appears, requesting permission.<ol>|
|TF1.3	       |UAT      | 	Map centred on user location | <ol><li>User clicks "Find nearest toilet"<li>user grants permission<li> Map appears centred on user location<ol>|
|TF1.4	       |UAT      | 	Markers added to the map for each tool station. | <ol><li>User clicks "Find nearest toilet"<li>User grants permission<li> Map shows markers for each public toilet in the area<ol>|
|TNF1.3	       |UAT      | 	Defaults to Bristol City Centre | <ol><li>User clicks "Find nearest toilet"<li>User denies permission<li> Map centred on Bristol City Centre<ol>|
|TNF1.4a	       |UAT      | 	The app should respond to the user within 5 seconds | <ol><li>User clicks "Find nearest toilet"<li>Map appears within 5 seconds<ol>|
|TNF1.4b	       |UAT      | 	The updates on type list should be straight foward | <ol><li>User clicks "Find toilet by type"<li>if change is needed, type list updated and easy to read<ol>|
|TNF1.1          |UAT      | 	The app should work on chrome and safari browsers | <ol><li>perform all test on chrome and safari<ol>|
|TNF1.2	       |UAT      | 	The data should be up-to-date; less than one year old | <ol><li>Confirm last update on Bristol Open Data<ol>|


          


## Test Runs

| Use-Case ID | Requirement ID | Software module | Test Case | Status |
| ------------|  ------------- | ----------------| ----------| -------|
|     UC1     |     FR1.1      | index.html.html |  TF1.1    |  PASS  |
|     UC1     |     FR1.3      | map.html.html   |  TF1.3    |  PASS  |
|     UC1     |     FR1.4      | map.html.html   |  TF1.4    |  PASS  |
|     UC1     |     NFR1.3     | map.html.html   |  TNF1.3    |  PASS  |
|     UC1     |     NFR1.4     | map.html.html   |  TNF1.4a  |  PASS  |
|     UC2     |     NFR1.4     | type.html       |  TNF1.4b  |  PASS  |
|     UC1     |     NFR1.1     | ALL             |  TNF1.1   |  PASS  |
|     UC2     |     NFR1.2     |                 |  TNF1.1    |  PASS (data last updated 13/2/24) |






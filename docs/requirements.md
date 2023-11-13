# Requirements

## User Needs

### User stories
As a hiker I would want to find a public toilet on a map incase I get lost

As a hiker I would want to see all the public toilets on a list so that I can plan my hike 

### Actors
Hiker - Long distance walker


### Use Cases
TODO: Describe each use case (at least one per team member).
    Give each use case a unique ID, e.g. UC1, UC2, ...
    Summarise these using the use-case template below.

| UC1| PUBLIC TOILET FINDER| 
| -------------------------------------- | ------------------- |
| **Description** | To be able to find nearest public toilet on a map |
| **Actors** | TODO: Hikers|
| **Assumptions** | </td>None</tr>
| **Steps** |  <ol><li>Have the ability to see the public toilets on a map</li><li>Request access for the users location</li><li>Get permission for geo location</li><li>Get nearest public toilets from the database</li><li>See the nearest public toilets on a map</li><ol>|
| **Variations** |  |
| **Non-functional** | TODO: OPTIONAL - List of non-functional requirements that the use case must meet. |
| **Issues** | |

| UC2| PUBLIC TOILET FINDER| 
| -------------------------------------- | ------------------- |
| **Description** | To be able to find nearest public toilet on a list|
| **Actors** | TODO: Hikers|
| **Assumptions** | </td>None</tr>
| **Steps** |  <ol><li>Have the ability to see the public toilets on a list</li><li>Request access for the users location</li><li>Get permission for geo location</li><li>Get nearest public toilets from the database</li><li>See the nearest public toilets on a list</li><ol>|
| **Variations** |  |
| **Non-functional** | TODO: OPTIONAL - List of non-functional requirements that the use case must meet. |
| **Issues** | |
TODO: Your Use-Case diagram should include all use-cases.

![Insert your Use-Case Diagram Here](images/UseCaseDiagram0.png)
![Insert your Use-Case Diagram Here](images/UseCaseDiagram1.png)

## Software Requirements Specification
### Functional requirements 
Use Case 1-
**FR1.1**    The system should get permission to access user location via geolocation object.
**FR1.2**    The system should query the database for public toilets location from Open Data Bristol.
**FR1.3**    The system should centre the map on the user location using the map object.
**FR1.4**   The system should add markers for public toilets using the map object.


### Non-Functional Requirements
Use Case 1-
**NFR1.1**    The app should work on android devices(portability)
**NFR1.2**    The app should show the public toilet within 1 mile(usability)
**NFR1.3**    It mudt work without without user geolocation (reliability)
**NFR1.4**   should load the public toilets within 5 secs(performability)



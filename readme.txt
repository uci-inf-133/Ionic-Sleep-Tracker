
--Readme document for Nick Turpitka and Yihao Huang, mturpitk & yihaoh4, 29646758 & 50276606--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

5/10
- 1/1 The ability to log overnight sleep
- 1/1 The ability to log sleepiness during the day
- 1/1 The ability to view these two categories of logged data
- 2/2 Either using a native device resource or backing up logged data
- */2 Following good principles of mobile design
- */2 Creating a compelling app
- */1 A readme which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?



3. What online resources did you consult when completing this assignment? (list specific URLs)

We mainly consulted Ionic documantation as well as some other online resources, in particular:

 - https://capacitorjs.com/docs/apis/filesystem
 - https://ionicframework.com/docs/api/card
 - https://ionicframework.com/docs/api/modal
 - https://stackoverflow.com/questions/63643148/angular-ionic-ion-datetime-picker
 - https://hafizmokhtar.com/ionic/ionic-4-modal-page-tutorial/
 


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?



5. Is there anything special we need to know in order to run your code?

The sleep data is stored in the local Capacitor storage. It takes time to load when the app is run, which results
in the screen being plac for several moments. Please, allow some time. 


--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?

We were aiming at college students and yound individuals who are either concerned about their sleep schedule, or 
are just curios about their sleeping pattern. The app is not designed to help monitor health or diagnose diseases.

7. Did you design your app specifically for iOS or Android, or both?

Our main design focus was on the iOS version, but the Android one was not disregarded completely.

8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?

A user selects "Log Sleep" button on the kain screen and is taken to a separate page implmenemnetd as a modal. On the page,
the user logs sleep start and sleep end date and time through the date pickers, and then selects submit option to log their
sleep.

9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?



10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?



11. Which feature choose--using a native device resource, backing up logged data, or both?

We chose backing up the data


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?

N/A

13. If you backed up logged data, where does it back up to?

The data is stored locally on the device through the Capacitor Storage.


14. Did you add any "extra" features, such as other data to log, the ability to edit or delete data, or changes to the styling of the app? If so, what did you add? How do these add to the experience of the app?

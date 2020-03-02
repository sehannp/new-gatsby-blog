---
title: "React Testing Series : Episode 1"
date: "2020-03-02"
featuredImage: '../images/jest.jpg'
---

### Testing : Basics.

This series will cover the basics of testing and how to do it. 
Knowledge for this series was obtained from learning from an amazing tutor in Udemy : Andrei. The course was Complete React Developer. I highly reccommend you to do it if you havent done already.

There are several ways of approaching testing phase:
1. Develop the full project and then commence testing
2. Develop a component and then test it.
3. Write tests and then develop

Option 1 above is good, but the only issue is that the later your testing phase, the greater the fixing effort. Finding a bug after everything is complete, could tear down the entire project. Extremely risky !

Options 2 and 3 are both fine. But option 3 is best for the following reasons:
1. A developer will anyway test his components before pushing it to testing phase / production, so why not write the tests at start itself
2. Since production code is checked quite often for each incremental addition, rework time is reduced.
3. Could be the best approach for startups / teams that does not have a dedicated testing teams.

But the question is , how do you write tests for something that isnt even developed first ?
It is entirely based on expectations. We expect something to happen when it is complete. So we set the expectations as the tests. 
For example of we have developed a button that adds two numbers on the click of a button, we would test,
1. if it returns 3 when 1 and 2 is supplied
2. if it returns an error / error handling procedure handles it when 1 and $ is supplied
3. it does nothing when the button is clicked.

Its totaly fine if you dont get it right away. We will see the tools of the trade next and then go on to see how it is done.

Happy testing!

> 
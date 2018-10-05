#Installation Instructions
##Complete these steps to allow for contributions to the project!

1. If you haven't already, clone this repository down to your local machine. Make sure you git checkout into a new branch before starting your work. Once you push to github, submit a pull request so someone can check your work before merging it with the master branch.

2. Install your dev dependencies. Run the following commands (note: they'll take a little time to complete!) :
    - npm install --save-dev  sass
      - This installs sass, which will allow the usage of sass variables for smoother css coding. It also allows for an easy way to pull in bootstrap into the project.
    - npm install --save-dev browser-sync
      - This step is optional, though it does make the project working easier. It syncs your browser to display any changes you save to the page's code instantly.
    - npm install --save-dev cpx
      - This will install copy, which will allow you to instantly copy changes to the source html file over to the distribution html file.
    - npm install --save-dev @babel/core @babel/cli @babel/preset-env
      - This installs the dev dependencies for Babel, which will allow you to complile changes to your src/main.js file over to your dist/main.js, and will also allow you to change which browser version you want to support by editing your babel config file (located in the root directory)

  3. Now that your dev dependencies are installed, you need to install a couple of regular dependencies that will work on the user-side of the website.
    - npm install --save @babel/polyfill
      - This is the last piece of babel to be installed
    - npm install --save express
      - This installs express, which will allow us to create small, static servers. This is important for pushing the project to the deployment site, heroku.
    - OPTIONAL: npm install --save concurrently
      - This will allow you to create scripts that run all of the software we've installed thusfar at once, rather than having to open multiple terminal windows. This is only necessary if you plan to utilize scripts for greater efficiency.

4. If you do plan to use scripts, you can view the pre-written scripts in the package.json file. These should work for everything, including the dev script which utilizes concurrently to run all of the dev dependencies simultaneously. Neat!

5. Once you are satisfied with the changes you've made (check for merge conflicts) push your local branch up onto the github repository for the project, and a submit a pull request.

6. Once your pull request has been reviewed and your branch has been merged with the master branch, the project will be updated through heroku!

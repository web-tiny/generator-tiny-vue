const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  prompting() {
    //  yeoman 在询问用户环节会自动调用此方法
    //  在此方法中可以调用父类的propt()方法发出对用户对命令询问
    return this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname // appname为项目生成目录名称
      }
    ])
    .then(answers => {
      /**
       * answers: { name: "user input value" }
       */
      this.answers = answers;
    });
  }
  writing() {
    const templates = [
      "babel.config.js",
      "package-lock.json",
      "package.json",
      "postcss.config.js",
      "README.md",
      "src/assets/logo.png",
      "src/components/HelloWorld.vue",
      "src/components/timeSelect.vue",
      "src/router/router.js",
      "src/store/mutations.js",
      "src/store/index.js",
      "src/store/actions.js",
      "src/store/modules/home.js",
      "src/views/About.vue",
      "src/App.vue",
      "src/main.js",
      "src/registerServiceWorker.js",
      "public/favicon.ico",
      "public/index.html",
      "public/manifest.json",
      "public/robots.txt"
    ];
    templates.forEach(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers,
      )
    })
  }
}
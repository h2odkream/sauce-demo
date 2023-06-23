import { test, expect } from '@playwright/test';

class Actor {
  abilities: {};
    name: any;
    
  constructor(name) {
    this.name = name;
    this.abilities = {};
  }

  can(ability) {
    this.abilities[ability.name] = ability;
    return this;
  }

  perform(task) {
    task.performAs(this);
    return this;
  }

 /* ask(question) {
    return question.answeredBy(this);
  }*/
}
export default Actor
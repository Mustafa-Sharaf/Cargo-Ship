// airFriction.js

export class AirFriction {
  constructor() {
    this.variables = {
      A2: 0, // space
      R2: 0, // radius
      v2: 0, // speed
      F2: 0,
      total: 0,
    };
  }
/////////
  setVariable(name, value) {
    if (this.variables.hasOwnProperty(name)) {
      this.variables[name] = value;
    } else {
      console.error(`Variable ${name} does not exist in AirFriction variables.`);
    }
  }

  calculateFrictionofair() {
    // if (this.variables.A2 && this.variables.R2 && this.variables.v2) {

    const F2 = 0.5 * 0.04 * this.variables.A2 * this.variables.R2 * (this.variables.v2 ** 2);
    if(this.variables.v2 < 0)
      window.totalforce -= F2;
    else
    window.totalforce += F2;
    console.log(`\nForce of air: ${F2}`);
    // }
  }
}

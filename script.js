function Temperature(temp) {
  this.setTemp = () => {
    this.temp = temp;
    while (temp < -273)
      temp = parseFloat(prompt('Độ C bạn nhập phải lớn hơn -273 độ. Mời bạn nhập lại:'));
  }
  this.getTemp = () => {
    this.setTemp();
    return this.temp;
  }
  this.convertCtoF = () => {
    const c = this.getTemp();
    return (c * 1.8 + 32).toFixed(2);
  }
  this.convertCtoK = () => {
    const c = this.getTemp();
    return (c + 273.15).toFixed(2);
  }
}

let myRoomTemperature = new Temperature(25);
console.log(myRoomTemperature.convertCtoF()); //77
console.log(myRoomTemperature.convertCtoK()); //298.15
#!/usr/bin/env node

const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')


const argv = yargs(hideBin(process.argv)).argv

let output = "";
let currentDate = new Date();

let year = 0;
let month = 0;
let day = 0;

year = argv.year ? argv.year : (argv.y ? argv.y : 0);
month = argv.month ? argv.month : (argv.m ? argv.m : 0);
day = argv.date ? argv.date : (argv.d ? argv.d : 0);


if (argv._ == 'current') {
  if (argv.year || argv.y) {
      output = currentDate.getFullYear();
  } else if (argv.month || argv.m) {
      output = currentDate.getMonth() + 1;
  } else if (argv.date || argv.d) {
      output = currentDate.getDate();
  } else {
      output = currentDate.toISOString();
  }
} else if (argv._ == 'add') {
    AddDate();       
    output = currentDate.toISOString();           
} else if (argv._ == 'sub') {
    SubDate();
    output = currentDate.toISOString();
} else {
  output = "error";
}

function AddDate() {
  currentDate.setDate(currentDate.getDate() + day);
  currentDate.setMonth(currentDate.getMonth() + month);
  currentDate.setFullYear(currentDate.getFullYear() + year);
}

function SubDate() {
  currentDate.setDate(currentDate.getDate() - day);
  currentDate.setMonth(currentDate.getMonth() - month);
  currentDate.setFullYear(currentDate.getFullYear() - year);
}

console.log(output);
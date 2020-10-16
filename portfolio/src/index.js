import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App></App>,document.getElementById('root'));

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak(){
        console.log('Hi, I am',this.name,'and',this.age,'years old.');
    }
}

const animal1 = new Animal('Lion','35');
animal1.speak();

console.log(animal1);

class Lion extends Animal{
    constructor(name, age, furColor){
     super(name,age);
        this.furColor=furColor;
    }
    roar(){
        console.log('Hi, I am',this.name,'having',this.furColor);
    }
}
const lion1 = new Lion('Tiger', '12', 'green');
lion1.roar();
lion1.speak();

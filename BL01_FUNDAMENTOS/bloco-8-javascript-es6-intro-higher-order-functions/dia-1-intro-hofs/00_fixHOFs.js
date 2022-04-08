const wakeUp = () => `Acordando!!`;

const goToBreakfast = () => `Bora tomar café!`;

const goToBed = () => `Partiu dormir!!`;

const doingThings = (functionParameter) => {
  console.log(functionParameter());
};

doingThings(wakeUp);
doingThings(goToBreakfast);
doingThings(goToBed);
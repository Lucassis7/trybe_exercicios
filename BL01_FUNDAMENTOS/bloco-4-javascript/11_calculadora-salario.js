// programa 11

const grossSalary = 3000;
let inssTax;
let netSalary;
let totalSalary;

if (grossSalary <= 1556.94) {
    inssTax = grossSalary * 0.08;
}

else if (grossSalary <= 2594.92 && grossSalary > 1556.94) {
    inssTax = grossSalary * 0.09;
}

else if (grossSalary <= 5189.82 && grossSalary > 2594.92) {
    inssTax = grossSalary * 0.11;
}

else {
    inssTax = 1 - ((grossSalary - 570.88) / grossSalary);
}

netSalary = grossSalary - inssTax;

if (netSalary <= 1903.98) {
    console.log('O salário deduzido todos os impostos é de: R$', netSalary);
}

else if (netSalary <= 2826.65 && netSalary > 1903.98) {
    totalSalary = netSalary - ((netSalary * 0.075) - 142.80);
    console.log('O salário deduzido todos os impostos é de: R$', totalSalary);
}

else if (netSalary <= 3751.05 && netSalary > 2826.65) {
    totalSalary = netSalary - ((netSalary * 0.15) - 354.80);
    console.log('O salário deduzido todos os impostos é de: R$', totalSalary);
}

else if (netSalary <= 4664.68 && netSalary > 3751.05) {
    totalSalary = netSalary - ((netSalary * 0.225) - 636.13);
    console.log('O salário deduzido todos os impostos é de: R$', totalSalary);
}

 else {
    totalSalary = netSalary - ((netSalary * 0.275) - 869.36);
    console.log('O salário deduzido todos os impostos é de: R$', totalSalary);
} 

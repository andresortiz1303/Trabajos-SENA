/* Ejercicio: Calculo de Salario Neto con Deducciones
Fecha: 22 de sept 2025
Autor: JeffersonAO
*/




    


 
    function totalSalario() {
      let day = parseInt(document.getElementById("day").value);

      if (isNaN(day) || day <= 0) {
        alert("Por favor, ingrese un número válido de días.");
        return;
      }

      let dayValue = 40000;
      let salary = dayValue * day;
      let salaryMin = 1400000;

      // Descuentos
      let health = salary * 0.12;
      let pension = salary * 0.16;
      let arl = salary * 0.052;
      let totalDescuento = health + pension + arl;

      // Subsidio de transporte
      let transport = 0;
      if (salary < salaryMin * 2) {
        transport = 114000;
      }

      // Retención
      let retention = 0;
      if (salary >= salaryMin * 4) {
        retention = salary * 0.04;
      }

      // Cálculo del salario neto
      let salarioNeto = salary + transport - totalDescuento - retention;

      // Mostrar resultados
      document.getElementById("discount").innerHTML =
        `Descuentos:<br>
        Salud: $${health.toFixed(2)}<br>
        Pensión: $${pension.toFixed(2)}<br>
        ARL: $${arl.toFixed(2)}<br>
        Total descuento: $${totalDescuento.toFixed(2)}<br>
        Retención: $${retention.toFixed(2)}<br>
        Transporte: $${transport.toFixed(2)}`;

      document.getElementById("netSalary").innerHTML =
        "Salario neto: $" + salarioNeto.toFixed(2);
    }
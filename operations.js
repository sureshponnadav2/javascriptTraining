


const operations = {}

Object.defineProperty(
    operations, 'addMethod', {
    value: function () {
        let inputValue = document.getElementById('inputId');
        let addBtn = document.getElementById('add');
        addBtn.addEventListener(
            'click', function () {
                inputValue.value = Number(inputValue.value) + 1;
            }
        );
    }
}
)
operations.addMethod();

// Substraction
Object.defineProperty(
  operations,'subMethod', {
      value: function(){
        let inputValue = document.getElementById('inputId');
        let subBtn = document.getElementById('sub');
        subBtn.addEventListener(
            'click', function(){
                inputValue.value = Number(inputValue.value) - 1;
            }
        )
      }
  }
);
operations.subMethod()

  // Increment by 10
Object.defineProperty(
  operations,'increment', {
      value: function(){
        let inputValue = document.getElementById('inputId');
        let incrBtn = document.getElementById('increment');
        incrBtn.addEventListener(
            'click', function(){
                inputValue.value = Number(inputValue.value) + 10;
            }
        )
      }
  }
);
operations.increment()

   // Decrement by 10
Object.defineProperty(
  operations,'decrement', {
      value: function(){
     let inputValue = document.getElementById('inputId');
     let decrBtn = document.getElementById('decrement');
     decrBtn.addEventListener('click',function(){
         inputValue.value = Number(inputValue.value) - 10;
     });
      }
  }
);
operations.decrement()


console.log(operations);




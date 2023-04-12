<template>
  <div class="main">
    <div class="calculator-box">
      <div class="result-box">
        <p class="result">{{result}}</p>
      </div>
      <div class="buttons-box">
        <div class="button-row">
          <div class="button" @click="putChar('sqrt(')">√</div>
          <div class="button" @click="result = ''">C</div>
          <div class="button darker" @click="result = result.substring(0, result.length - 1)">⌫</div>
        </div>
        <div class="button-row">
          <div class="button" @click="putChar('(')">(</div>
          <div class="button" @click="putChar(')')">)</div>
          <div class="button" @click="putChar('%')">%</div>
          <div class="button darker" @click="putChar('/')">÷</div>
        </div>
        <div class="button-row">
          <div class="button" @click="putChar(7)">7</div>
          <div class="button" @click="putChar(8)">8</div>
          <div class="button" @click="putChar(9)">9</div>
          <div class="button darker" @click="putChar('*')">x</div>
        </div>
        <div class="button-row">
          <div class="button" @click="putChar(4)">4</div>
          <div class="button" @click="putChar(5)">5</div>
          <div class="button" @click="putChar(6)">6</div>
          <div class="button darker" @click="putChar('+')">+</div>
        </div>
        <div class="button-row">
          <div class="button" @click="putChar(1)">1</div>
          <div class="button" @click="putChar(2)">2</div>
          <div class="button" @click="putChar(3)">3</div>
          <div class="button darker" @click="putChar('-')">-</div>
        </div>
        <div class="button-row">
          <div class="button" @click="putChar('.')">.</div>
          <div class="button" @click="putChar(0)">0</div>
          <div class="button success" @click="evaluateExpression">=</div>
        </div>
      </div>
    </div>
    <div>
      <HistoryComponent :history="result"></HistoryComponent>
    </div>
  </div>
</template>

<script>
import { evaluate } from "mathjs";
import HistoryComponent from "@/components/HistoryComponent";

export default {
  name: "CalculatorComponent",
  components: {HistoryComponent},
  data() {
    return {
      result: '',
      history: []
    }
  },

  methods: {
    putChar(number) {
      this.result = this.result.concat(number);
    },

    evaluateExpression() {
      try {
        this.history.push(this.result);
        this.result = evaluate(this.result) + '';
      } catch (e) {
        alert(e);
      }
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.calculator-box {
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 500px;
  border: 1px solid white;
  border-radius: 5px;
}

.result-box {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 400px;
  height: 50px;
  background-color: #353535;
  border: 1px solid white;
  border-radius: 5px;
}

.result {
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  margin-right: 8px;
}

.buttons-box {
  padding: 10px;
}

.button-row {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #2f2f2f;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  margin-left: 8px;
  transition: all 0.3s ease;
}

.darker {
  background-color: #2c2c2c;
}

.success {
  background-color: #783232;
  color: black;
}

.button:hover {
  background-color: #d9d9d9;
  font-size: 20px;
  font-weight: bold;
  transform: scale(1.1);
}

</style>
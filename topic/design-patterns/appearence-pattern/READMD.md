### 外观模式

#### 我的理解呀

1. 一个很大的需求， 比如做饭。有以下的步骤

   1. 买菜
   2. 洗菜
   3. 切菜
   4. 做饭
   5. 洗碗

2. 一开始，什么模式都不介入，大概是

   ```JavaScript
   function cook() {
    // 买菜1
    // 买菜2
     // 洗菜1
     // 洗菜2.。。。n
    因为每一个步骤可能代码都很长
   }
   ```

3. 为了优化代码， 我们常常说， 拆分代码。这是为了复用。 比如，第一天做饭都是我负责，五步都要我做， 第二天我和别人搭档，我只要负责前三步，其他人负责后两步，大概是

   ```JavaScript
   function cook() {
    // 买菜1
    // 买菜2
     // 洗菜1
     // 洗菜2.。。。n
    因为每一个步骤可能代码都很长
   }

   function cookthreeSteps() {}
   function cooktwoSteps() {}
   ```

   如果不拆分，就要复制黏贴很多的代码

4. 第三步简单优化 大概是

   ```JavaScript
   function 买菜（）{}
   function 洗菜（）{}
   function 切菜（）{}
   function 做饭（）{}
   function 洗碗（）{}
   function cook（） {
     function 买菜（）{}
     function 洗菜（）{}
     function 切菜（）{}
     function 做饭（）{}
     function 洗碗（）{}
   }
   function cookthreeSteps() {
      function 买菜（）{}
     function 洗菜（）{}
     function 切菜（）{}
   }
   function cooktwoSteps() {
      function 做饭（）{}
     function 洗碗（）{}
   }
   ```

5. 然后， 又因为 cooktwoSteps 可能多次调用，可能多个用户调用， 这就成了门面模式

6. 形式上 门面模式张这样

   ```JavaScript
   function a(x){
      // do something
   }
   function b(y){
      // do something
   }
   function ab( x, y ){
       a(x);
       b(y);
   }
   ```

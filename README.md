# -JQuery-
一个简易的JQuery手风琴插件
# 使用方法
 1.引用slider.css文件
 2.页面结构如下	
 
 ```javaScript
 <div id="slider">
 ```
     <ul>
       <li>
        <div class="slide">
         <img src="img/01.jpg" alt=""/>
         <div class="slideText">
          <span>小米音乐</span>
          <p>120Hz高帧率流速屏 / 索尼6400万前后六摄 / 6.67''小孔径全面屏
            / 最高可选8GB+256GB大存储 / 高通骁龙730G处理器 / 3D四曲面玻璃机身 / 
            4500mAh+27W快充 / 多功能NFC</p>
         </div>
        </div>
       </li>
     </ul>
		</div>
 1.引用Jquery类库<br>
 2.引用slider.js或者slider.min.js<br>
 3.$('#slider').slider({})<br>
   传入对象参数\<br>
   {SliderWidth,SliderHeight,Width}<br>
   SliderWidth -- 外层盒子的宽度<br>
   SliderHeight -- 外层盒子的高度<br>
   Width  --手风琴效果实现后其余li的宽度<br>

# --------------
 后续不断优化<br>

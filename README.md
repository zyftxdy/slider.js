# -JQuery-
一个简易的JQuery手风琴插件
# 使用方法
 1.引用slider.css文件<br>
 2.页面结构如下(SliderText可视情况删除)	
 
 ```hmtl
<div id="slider">
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
```
 3.引用Jquery类库<br>
 4.引用slider.js或者slider.min.js<br>
 5.传入object对象参数(默认参数为SliderWidth:800,SliderHeight:350,Width:50)<br>
   {SliderWidth,SliderHeight,Width}<br>
   * SliderWidth -- 外层盒子的宽度
   * SliderHeight -- 外层盒子的高度
   * Width  --手风琴效果实现后其余li的宽度
   * js插件调用如下:
   ```javascript
   <script src="js/jquery-1.8.3.min.js" type="text/javascript" charset="utf-8"></script>
   <script src="js/slider.min.js" type="text/javascript" charset="utf-8"></script>
   <script type="text/javascript">
	$(function(){
	   $('#slider').silder({
             SliderWidth:600,
             SliderHeight:250,
             width:35
           });
	})
   </script>
   ```

# 
 后续不断优化

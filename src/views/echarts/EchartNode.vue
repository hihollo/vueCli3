option = {
title:{
text: 'hello',     /*  title. text = ''   */
textStyle: {
color: '#0054FF' /*   title.textStyle. color = '#333'  */
}
},
xAxis: {
type: 'category',
data: ['a','b','c','d','e','f','g']
},
yAxis: {
type: 'value',

},

grid: {    /*怎个图形的上下左右离容器的边距*/
left: '1%',
right: '1%',
bottom: '2%',
top: '8%',
containLabel: true
},
series :  {
name:'',
type:'bar',
barWidth:90,
barCategoryGap: '-2%',

itemStyle: {
normal: {
barBorderRadius:false,
color: '#0054FF',
}
},
data:[1,2,3,4,5,6,7]
}

};

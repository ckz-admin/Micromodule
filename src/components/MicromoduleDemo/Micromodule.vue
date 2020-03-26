<template>
   <el-container class="Micromodule">
        <div class="Micromodule_left_header_under_main_img_click" v-show="hit" @click="click">
            <img :src="clickItem.name" style="position:relative;" 
            :width="clickItem.width"  :style="{marginTop: clickItem.marginTop, fontSize: clickItem.font, color: clickItem.color}" alt="">
        </div>
        <el-aside style="width: 11%;">
            <div class="Micromodule_right">
                <div class="Micromodule_right_header"></div>
                <div class="Micromodule_right_main">
                    <template v-for="(item, index) in list">
                         <div class="Micromodule_right_main_font" :style="{top: item.top, fontSize: item.font, color: item.color}" 
                         @mouseenter="enter(index, item)" @mouseleave="leave">
                            {{item.name}}
                        </div>
                      
                    </template>
                   <div class="Micromodule_right_main_img" id="img">
                       <img src="static/img/菜单选框.png" width="100%" height="100%" alt="">
                   </div>
                  
                </div>
            </div>


        </el-aside>
        <el-container style="width: 89%;">
            <el-header style="height: 50%">
              
                <div class="Micromodule_left_header_on">
                    <div class="Micromodule_left_header_on_div">
                        <div class="Micromodule_left_header_on_div_right"></div>
                        <div class="Micromodule_left_header_on_div_left">
                            <el-row :gutter="20">
                                <el-col :span="14">
                                    <div style="position: relative;left: 12rem">{{date}}</div>
                                </el-col>
                                <el-col :span="10">
                                   <el-row>
                                       <el-col :span="8">
                                           <el-row >
                                               <el-col :span="4">
                                                    <img src="../../../static/img/报警.png" width="80%"alt="">
                                                </el-col>
                                                <el-col :span="14">
                                                    <div>正常：23</div>
                                                </el-col>
                                           </el-row>
                                       </el-col>
                                       <!-- <el-col :span="1">
                                           <div style="text-align: left">/</div>
                                       </el-col> -->
                                       <el-col :span="8">
                                            <el-row>
                                               <el-col :span="4">
                                                    <img src="static/img/报警 (1).png" width="80%" height="40%" alt="">
                                                </el-col>
                                                <el-col :span="14">
                                                    <div>报警：12</div>
                                                </el-col>
                                           </el-row>
                                       </el-col>
                                   </el-row>
                                </el-col>
                            </el-row>

                        </div>
                    </div>
                </div>
                <div class="Micromodule_left_header_under">
                    <div class="Micromodule_left_header_under_main">
                        <el-row :gutter="20">
                           
                            <template v-for="(item, index) in listImg">
                                <el-col :span="4">
                                    <div class="Micromodule_left_header_under_main_img"  @click="click(index, item)">
                                        <img :src="item.name" :width="item.width" 
                                        :style="{marginTop: item.marginTop, marginRight: item.marginRight}" alt="">
                                       
                                    </div>
                                     <div style="padding-right: 3rem">{{item.font}}</div>
                                </el-col>

                            </template>
                           
                           
                        </el-row>
                    </div>
                </div>    

                
            </el-header>
            <el-main style="height: 50%">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-row>
                            <el-col :span="16" >
                                <el-row>
                                    <el-col :span="12">
                                        <div class="Micromodule_left_main_right_div_one">
                                            <el-image :src="'../../../static/img/空调.png'">
                                            </el-image>
                                            <div class="Micromodule_left_header_on_div_margin_one">空调开</div>
                                        </div>
                                        <div class="Micromodule_left_main_right_div_two">
                                            <img src="../../../static/img/红外.png"  alt="">
                                            <div class="Micromodule_left_header_on_div_margin_two">红外</div>
                                        </div>
                                    </el-col>
                                     <el-col :span="12">
                                         <div class="Micromodule_left_main_right_div_three">
                                           <img src="../../../static/img/漏水.png"  alt="">
                                            <div class="Micromodule_left_header_on_div_margin_three">漏水</div>
                                        </div>
                                        <div class="Micromodule_left_main_right_div_four">
                                            <img src="../../../static/img/烟雾报警.png"  alt="">
                                            <div class="Micromodule_left_header_on_div_margin_four">烟感</div>
                                        </div>   
                                    </el-col>
                                </el-row>
                                
                            </el-col>
                 
                        </el-row>
                        

                    </el-col>
                    <el-col :span="12">
                        <div>
                            <div id="myChart" :style="{width: '600px', height: '330px'}"></div>
                        </div>
                        <!-- <div>
                            <img src="../../../static/img/温湿度曲线.png"   alt="">
                        </div> -->
                    </el-col>
                </el-row>



            </el-main>
        </el-container>
    </el-container>
</template>
<script>
export default {
    data() {  
       return {
           list: [
               {name: "总览", top: "19%", font: "1rem", color: "#798396"},
               {name: "温湿度", top: "28.5%", font: "1rem", color: "#798396"},
               {name: "空调", top: "38%", font: "1rem", color: "#798396"},
               {name: "综合", top: "47.5%", font: "1rem", color: "#798396"},
               {name: "记录", top: "57%", font: "1rem", color: "#798396"},
               {name: "设置", top: "66.5%", font: "1rem", color: "#798396"},
           ],
           listImg: [
               {name: "static/img/门.png", font: "自动门", width:"25%", marginRight: "0.8rem", marginTop: "1.6rem"},
               {name: "static/img/电流表总览灯泡图标.png", font: "照明1", width:"25%", marginRight: "0.8rem", marginTop: "1.6rem"},
               {name: "static/img/电流表总览灯泡图标.png", font: "照明2", width:"25%", marginRight: "0.8rem", marginTop: "1.6rem"},
               {name: "static/img/电流表总览灯泡图标.png", font: "背景灯", width:"25%", marginRight: "0.8rem", marginTop: "1.6rem"},
               {name: "static/img/天窗.png", font: "天窗", width:"40%", marginRight: "0.8rem", marginTop: "2.7rem"}
           ],
           img: true,
           hit: false,
        //    missed: true,
           leaveItem: {},
           clickItem: {},
           date:new Date()
       } 
    },
    mounted() {
        this.drawLine();
        let _this = this;
        this.timer = setInterval(function(){
            _this.date = new Date().toLocaleString();
        });
    },
    beforeDestroy:function(){
        if(this.timer){
            clearInterval(this.timer);
        }
    },
    methods: {
        setNowTimes(){
            // this.time = new Date().format("YYYY.MM.DD HH:mm");
        },
        enter(index, item) {    
           this.leaveItem = item;
           this.leaveItem.font = "1.3rem";
           this.leaveItem.color = "white";
           let img = document.getElementById("img");
           img.style.display = "inherit";
           img.style.top = (10.5 * index) + "%";
           
        },
        leave() {
            this.leaveItem.color = "#798396";
            this.leaveItem.font = "1rem";
            document.getElementById("img").style.display = "none";
            console.log("离开");
        },
        click(index, item) {
            console.log(item);
        
                this.hit = true;
                document.querySelector(".Micromodule_left_header_under_main_img_click").style.left = 15.5 + (11.5 * index) + "%";
                this.clickItem = JSON.parse(JSON.stringify(item));
                this.clickItem.marginTop = index == 4 ? "4rem" : "3rem";
                this.clickItem.width = index == 4 ? "45%" : "28%";
                
            // }
            

            // this.clickItem.marginRight = "0rem";
        },
         drawLine(){
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            let option = {
                title: {
                    text: '报表',
                    color: "white",
                    textStyle: {
                        color: 'white'
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['平均温度', "平均湿度"],
                    textStyle: {
                        color: 'white'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    axisLabel: {
                            show: true,
                            textStyle: {
                                color: 'white'
                            }
                    }
                    
                },
                yAxis: {
                    type: 'value',
                    axisLabel : {
                            textStyle: {
                                color: 'white'
                            }
                    }
                },
                series: [
                    {
                        name: '平均温度',
                        type: 'line',
                        stack: '总量',
                        data: [60, 132, 101, 134, 90, 30, 40],
                        itemStyle : { 
                            normal: {
                                color: "#FFDE00",
                                label: {show: true, color: "white"},
                                lineStyle: {color: '#FFDE00'}

                            }
                        
                        }
                        
                    },
                    {
                        name: '平均湿度',
                        type: 'line',
                        stack: '总量',
                        data: [60, 123, 141, 114, 100, 152, 145],
                        itemStyle : { 
                            normal: {
                                color: "#36DDE8",
                                label: {show: true, color: "white"},
                                lineStyle: {color: '#36DDE8'}

                            }
                        
                        }
                        
                    }
                    
                ]
            };

            // 绘制图表
            myChart.setOption(option);
         }
        }
} 
</script>
<style lang="less" scoped>
    .Micromodule {
        height: 100%;
        background: url("../../../static/img/电流表总览修改-10-2.png") no-repeat center center;
        background-size: 100% 100%;
        color: #798396;
        ::-webkit-scrollbar {
            width: 0px;
            height: 1px;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 5px;
            // -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
            background: rgba(0, 0, 0, 0.2);
        } 
        .Micromodule_right {
            height: 100%;
            .Micromodule_right_header {
                height: 10%;
            }
            .Micromodule_right_main {
                height: 90%;
               .Micromodule_right_main_img {
                   position: relative;
                //    top: 10.5%;
                   height: 30%;
                   width: 100%;
                   z-index: 1;
                   display: none; 
               }
               .Micromodule_right_main_font {
                   position: absolute;
                   width: 11%;
                   height: 6%;
                   padding-top: 2rem;
                //    top: 22.5%;
                   z-index: 2;
                   cursor: pointer;
               }
               
            }
            
        }
        .Micromodule_left_header_on {
            height: 20%;
            color: whitesmoke;
            .Micromodule_left_header_on_div {
                height: 50%;
                display: flex;
                flex-direction: row;
                .Micromodule_left_header_on_div_right {
                    flex: 2 0 auto;
                    height: 100%;
                }
                .Micromodule_left_header_on_div_left{
                    flex: 1 0 auto;
                    height: 80%;
                    margin-top: 1.2rem;
                }
            }
        }
        .Micromodule_left_header_under {
            height: 80%;
            .Micromodule_left_header_under_main {
                width: 78%;
                height: 100%;
                margin-left: 4rem;
                color: white;
                .Micromodule_left_header_under_main_img {
                    width: 80%;
                    height: 8rem;
                    margin-top: 4.5rem;
                    background: url("../../../static/img/电流表总览未选中按钮.png") no-repeat center center;
                    background-size: 80% 100%;
                    z-index: 20;
                    img {
                        z-index: 10;
                    }
                   
                }
               
              
            }
        }
         .Micromodule_left_header_under_main_img_click {
            position: absolute;
            width: 9rem;
            height: 10rem;
            background: url("../../../static/img/电流表总览选中按钮.png") no-repeat center center;
            background-size: 80%;
            top: 9rem;
            // left: 17.5%;
            z-index: 1;
            left: 15.5%;
            // left: 27%;
            // left: 38.5%;
        }
        .Micromodule_left_main_right_div_one {
            // margin-right: 8rem;
            margin-top: 3rem;
        }
        .Micromodule_left_main_right_div_two {
            margin-left: 4rem;
            margin-bottom: 0;
        }
        .Micromodule_left_main_right_div_three {
            // margin-right: 8rem;
            position: relative;
            margin-top: 1.5rem;
            right: 3.5rem;
        }
        .Micromodule_left_main_right_div_four {
            position: relative;
            right: 3.5rem;
        }
        .Micromodule_left_header_on_div_margin_one {
            color: white;
            position: relative;
            right: 0.3rem;
            // border: 1px solid red;
            // padding-right: 0.8rem;
        }
        .Micromodule_left_header_on_div_margin_two {
            color: white;
            position: relative;
            bottom: 4rem;
            right: 2.8rem;
        }
        .Micromodule_left_header_on_div_margin_three {
            color: white;
            position: relative;
            // right: 0.3rem;
        }
        .Micromodule_left_header_on_div_margin_four {
            color: white;
            position: relative;
            bottom: 4rem;
        }
       
    }   
    
    
</style>
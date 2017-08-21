<template>
    <div class="baipi">
        <div class='location-bar'>
            <span class='location-icon'>
                <span class='ti-layout-grid3'></span>
            </span>
            <span>
                <strong>当前位置：</strong>白皮书信息</span>
        </div>
        <div class='container'>
            <div class='baipi-search'>
                <div class='row'>
                    <div class='col-sm-1'>国籍：</div>
                    <div class='col-sm-2'>
                        <select class="form-control form-control-sm">
                            <option>中国</option>
                        </select>
                    </div>
                    <div class='col-sm-1'></div>
                    <div class='col-sm-1'>旅客姓名：</div>
                    <div class='col-sm-2'>
                        <input type="text" class="form-control form-control-sm" id="exampleFormControlInput1">
                    </div>
                    <div class='col-sm-1'></div>
                    <div class='col-sm-1'>性别：</div>
                    <div class='col-sm-2'>
                        <select class="form-control form-control-sm">
                            <option>请选择</option>
                            <option>男</option>
                            <option>女</option>
                        </select>
                    </div>
                </div>
                <div class='row'>
                    <div class='col-sm-1'>出生日期：</div>
                    <div class='col-sm-2'>
                        <input type="date" class="form-control form-control-sm">
                    </div>
                    <div class='col-sm-1'></div>
                    <div class='col-sm-1'>是否报警：</div>
                    <div class='col-sm-2'>
                        <select class="form-control form-control-sm">
                            <option>请选择</option>
                            <option>是</option>
                            <option>否</option>
                        </select>
                    </div>
                    <div class='col-sm-1'></div>
                    <div class='col-sm-1'>数据来源：</div>
                    <div class='col-sm-2'>
                        <select class="form-control form-control-sm">
                            <option>请选择</option>
                            <option>网络</option>
                            <option>机器</option>
                        </select>
                    </div>
                </div>
                <div class='row'>
                    <div class='col-sm-1'>证件号码</div>
                    <div class='col-sm-2'>
                        <input type="text" class="form-control form-control-sm">
                    </div>
                    <div class='col-sm-1'></div>
                    <div class='col-sm-1'>刷新时间(分钟)：</div>
                    <div class='col-sm-2'>
                        <input type="text" class="form-control form-control-sm">
                    </div>
                </div>
                <div class='text-center'>
                    <button type="button" class="btn btn-primary margin10">查询</button>
                    <button type="button" class="btn btn-primary margin10">清空</button>
                    <button type="button" class="btn btn-primary margin10">自动刷新</button>
                </div>
            </div>
            <div class='baipi-list'>
                <div class='baipi-list-title clear'>
                    <div class='left'>
                        <button type="button" class="btn btn-info btn-sm">白皮书信息</button>
                    </div>
                    <div class='right'>
                        <button type="button" class="btn btn-outline-dark btn-sm">新建</button>
                        <button type="button" class="btn btn-outline-dark btn-sm">批量删除</button>
                        <button type="button" class="btn btn-outline-dark btn-sm">导出</button>
                    </div>
                </div>
                <div class='baipi-list-content'>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <input type="checkbox">
                                </th>
                                <th class='table-order'>序号</th>
                                <th class='table-order'>国籍</th>
                                <th class='table-order'>旅客姓名</th>
                                <th class='table-order'>性别</th>
                                <th class='table-order'>出生日期</th>
                                <th class='table-id'>证件号码</th>
                                <th class='table-alert'>是否报警</th>
                                <th class='table-alert'>备注</th>
                                <th>操作</th>
                            </tr>
    
                        </thead>
                        <tbody class='background'>
                            <tr>
                                <th>
                                    <input type="checkbox">
                                </th>
                                <th>1</th>
                                <th>中国</th>
                                <th>宋玉涛</th>
                                <th>男</th>
                                <th>1987/10/30</th>
                                <th>150403199900004675</th>
                                <th>是</th>
                                <th>代购</th>
                                <th>
                                    <button type="button" class="btn btn-success btn-sm">命中航班</button>
                                    <button type="button" class="btn btn-info btn-sm">编辑</button>
                                    <button type="button" class="btn btn-warning btn-sm">删除</button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <input type="checkbox">
                                </th>
                                <th>2</th>
                                <th>中国</th>
                                <th>宋玉涛</th>
                                <th>男</th>
                                <th>1987/10/30</th>
                                <th>150403199900004675</th>
                                <th>是</th>
                                <th>代购</th>
                                <th>
                                    <button type="button" class="btn btn-success btn-sm">命中航班</button>
                                    <button type="button" class="btn btn-info btn-sm">编辑</button>
                                    <button type="button" class="btn btn-warning btn-sm">删除</button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <input type="checkbox">
                                </th>
                                <th>3</th>
                                <th>中国</th>
                                <th>宋玉涛</th>
                                <th>男</th>
                                <th>1987/10/30</th>
                                <th>150403199900004675</th>
                                <th>是</th>
                                <th>代购</th>
                                <th>
                                    <button type="button" class="btn btn-success btn-sm">命中航班</button>
                                    <button type="button" class="btn btn-info btn-sm">编辑</button>
                                    <button type="button" class="btn btn-warning btn-sm">删除</button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <input type="checkbox">
                                </th>
                                <th>4</th>
                                <th>中国</th>
                                <th>宋玉涛</th>
                                <th>男</th>
                                <th>1987/10/30</th>
                                <th>150403199900004675</th>
                                <th>是</th>
                                <th>代购</th>
                                <th>
                                    <button type="button" class="btn btn-success btn-sm">命中航班</button>
                                    <button type="button" class="btn btn-info btn-sm">编辑</button>
                                    <button type="button" class="btn btn-warning btn-sm">删除</button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <input type="checkbox">
                                </th>
                                <th>5</th>
                                <th>中国</th>
                                <th>宋玉涛</th>
                                <th>男</th>
                                <th>1987/10/30</th>
                                <th>150403199900004675</th>
                                <th>是</th>
                                <th>代购</th>
                                <th>
                                    <button type="button" class="btn btn-success btn-sm">命中航班</button>
                                    <button type="button" class="btn btn-info btn-sm">编辑</button>
                                    <button type="button" class="btn btn-warning btn-sm">删除</button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <input type="checkbox">
                                </th>
                                <th>5</th>
                                <th>中国</th>
                                <th>宋玉涛</th>
                                <th>男</th>
                                <th>1987/10/30</th>
                                <th>150403199900004675</th>
                                <th>是</th>
                                <th>代购</th>
                                <th>
                                    <button type="button" class="btn btn-success btn-sm">命中航班</button>
                                    <button type="button" class="btn btn-info btn-sm">编辑</button>
                                    <button type="button" class="btn btn-warning btn-sm">删除</button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <input type="checkbox">
                                </th>
                                <th>5</th>
                                <th>中国</th>
                                <th>宋玉涛</th>
                                <th>男</th>
                                <th>1987/10/30</th>
                                <th>150403199900004675</th>
                                <th>是</th>
                                <th>代购</th>
                                <th>
                                    <button type="button" class="btn btn-success btn-sm">命中航班</button>
                                    <button type="button" class="btn btn-info btn-sm">编辑</button>
                                    <button type="button" class="btn btn-warning btn-sm">删除</button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <input type="checkbox">
                                </th>
                                <th>5</th>
                                <th>中国</th>
                                <th>宋玉涛</th>
                                <th>男</th>
                                <th>1987/10/30</th>
                                <th>150403199900004675</th>
                                <th>是</th>
                                <th>代购</th>
                                <th>
                                    <button type="button" class="btn btn-success btn-sm">命中航班</button>
                                    <button type="button" class="btn btn-info btn-sm">编辑</button>
                                    <button type="button" class="btn btn-warning btn-sm">删除</button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <input type="checkbox">
                                </th>
                                <th>5</th>
                                <th>中国</th>
                                <th>宋玉涛</th>
                                <th>男</th>
                                <th>1987/10/30</th>
                                <th>150403199900004675</th>
                                <th>是</th>
                                <th>代购</th>
                                <th>
                                    <button type="button" class="btn btn-success btn-sm">命中航班</button>
                                    <button type="button" class="btn btn-info btn-sm">编辑</button>
                                    <button type="button" class="btn btn-warning btn-sm">删除</button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <input type="checkbox">
                                </th>
                                <th>5</th>
                                <th>中国</th>
                                <th>宋玉涛</th>
                                <th>男</th>
                                <th>1987/10/30</th>
                                <th>150403199900004675</th>
                                <th>是</th>
                                <th>代购</th>
                                <th>
                                    <button type="button" class="btn btn-success btn-sm">命中航班</button>
                                    <button type="button" class="btn btn-info btn-sm">编辑</button>
                                    <button type="button" class="btn btn-warning btn-sm">删除</button>
                                </th>
                            </tr>
    
                        </tbody>
    
                    </table>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center" style='margin-top:30px;'>
                            <li class="page-item disabled">
                                <a class="page-link" href="#" tabindex="-1">上一页</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">1</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">2</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">3</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">下一页</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'baipi',
    data() {
        return {
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.baipi {
    background: #F5F5F6;
    width: 100%;
    height: 100%;
    padding: 80px 30px 50px 240px;
    text-align: left;
}

.background {
    background: #fff;
}

.location-bar {
    background: #DBDADA;
    height: 40px;
    position: relative;
    line-height: 40px;
    padding-left: 40px;
}

.location-icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: #17A05D;
    text-align: center;
    line-height: 40px;
    position: absolute;
    left: -20px;
    top: 0;
}

.location-icon span {
    color: #fff;
}

.baipi-search {
    padding-top: 20px;
}

.baipi-search .row {
    margin: 10px;
}

.margin10 {
    margin: 10px;
}

.row div {
    padding: 0;
}

.baipi-list-title {
    border-bottom: 2px solid #5BC0DE;
}

.baipi-list-content table,
.baipi-list-content table tr {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #DDDDDD;
}

.table-order {
    width: 10%;
}

.table-id {
    width: 17%;
}

.table-alert {
    width: 7%;
}
</style>
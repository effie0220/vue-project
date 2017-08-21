import fetch from  '../config/fetch';
class TestService {
    // 获取测试数据
    getTestData() {
        return fetch('test/test');
    }
}
export default new TestService();
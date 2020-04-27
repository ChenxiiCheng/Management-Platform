const USER_INFO = 'USER_INFO';

/**
 * 校验用户是否已登录，用于路由跳转判断
 * return boolean
 */
export function authLogin() {
  const userInfo = JSON.parse(localStorage.getItem(USER_INFO));
  if (!userInfo) {
    return false;
  }
  return true;
}

/**
 * 已登录的用户点击登出按钮
 */
export function userLogout() {
  localStorage.removeItem(USER_INFO);
}

/**
 * 暂时用于注册页面 注册后跳转
 */
export function register(username) {
  localStorage.setItem(USER_INFO, JSON.stringify(username));
}

/**
 * 暂时用于登录页面 判断localStorage中是否有USER_INFO，有跳转
 */
export function login(username, password) {
  if (username === 'admin' && password === '123456') {
    localStorage.setItem(USER_INFO, JSON.stringify(username));
    return true;
  }
  return false;
}

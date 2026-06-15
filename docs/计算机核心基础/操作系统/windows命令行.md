```powershell
# 查看处理器的架构, 0表示amd32位, 9表示amd64位, 6表示intel的安藤
wmic cpu get architecture

# 查看该电脑连接过的所有wifi
netsh wlan show profile

# 查看设备连接过wifi的对应密码：关键内容那一栏就是密码
netsh wlan show profile name="wifi名" key=clear

# 修复系统文件
sfc /scannow

# 自动指定秒数,参数1：s/关闭、 r/重启、 a/中止、h/休眠, 参数2：t/指定时间、 f/强制关机、o/进入高级启动选项(先重启)
shutdown -s -t <'指定n秒后关机'>

# 启动软件
start '软件位置'

# 查看系统信息
systeminfo

# 清理终端内容
cls
```

## 快捷键

```powershell
# tab: 自动补全命令和目录

# esc：清空当前命令
```

## 服务管理

```powershell
# 创建服务
sc create binpath="exe文件路径" displayname="显示的服务名"
	
# 为应用程序安装服务
'exe文件' -install

# 启动服务
net start '服务名'

# 停止服务
net stop '服务名'

# 查看端口
netstat -ano
```

## 进程管理

```powershell
# 查看所有进程信息
tasklist

# 查看指定进程号的信息
tasklist|findstr '进程号'

# 杀死进程
taskkill
```

- DHCP：动态获取ip地址的服务
- DNS：域名解析服务

## 网络管理

> c:/windows/system32/etc/hosts存放本地记录(本地dns)

```powershell
# 查看网络连接配置
ipconfig

# 命令行请求工具curl
curl <'请求的url'>

# 查看公网ip
curl ipinfo.io

# 排查网络故障：可以查看本地到目标服务器经过的所有网络链路信息
tracert <'url'>
```


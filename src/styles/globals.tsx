import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }

  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  .wel-heading {
    padding: 30px 0;
    font-weight: 600;
    font-size: 28px;
    line-height: 136.02%;
    text-align: center;
    color: #27272E;
}

.ant-form-item label {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: #425466;
}
.Google-btn {
  padding: 0px 0 !important;
  width: 70px;
  height: 60px !important;
  border: none !important;
  box-shadow: 0px 0px 1px rgba(12,26,75,0.2), 0px 1px 3px rgba(50,50,71,0.1);
  border-radius: 8px !important;
  margin: 30px auto;
  display: table;
}
a.login-form-forgot {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  text-align: right;
  color: #16192C;
}
form#normal_login span.ant-divider-inner-text {
  font-family: 'Inter';
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: #718096;
}
form#normal_login .ant-form-item:nth-child(2) {
  margin: 0;
}

form#normal_login {
  height: fit-content;
  width: 33%;
}
.sign-up-btn {
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #718096;
}

.sign-up-btn a {
  color: #16192C;
}
header .ant-row {
  align-items: center;
  padding: 0 30px;
}

header .ant-row a.ant-dropdown-trigger span.ant-avatar {
  width: 80px;
  height: 80px;
  border-radius: 70px;
}

header .ant-row a.ant-dropdown-trigger .ant-space-item {
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #16192C;
}
header .ant-divider {
  margin: 0;
}

header ul.ant-menu-overflow {
  border: none;
}

header ul.ant-menu-overflow li span.ant-menu-title-content {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #16192C;
}

header ul.ant-menu-overflow li .ant-image {
  margin: 0 6px 0 0;
}
header .ant-row:first-child {
  padding: 20px 30px;
}
header ul.ant-menu-overflow .ant-menu-item-selected span {
  color: #20B7FF !important;
}

header ul.ant-menu-overflow li.ant-menu-item-selected img, header ul.ant-menu-overflow li:hover img {
 filter: brightness(0) saturate(100%) invert(81%) sepia(43%) saturate(7499%) hue-rotate(170deg) brightness(101%) contrast(101%);
}
.chat-search button.ant-btn {
  border-left: 0;
}
h2.chat-title {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #16192C;
}

.chat-title-bar {
  padding: 14px 20px;
  background: #fff;
}
.chat-msg {
  background: #F8F9FC;
  // height: calc(100vh - 210px);
  // position:relative;
  padding: 10px 30px;
}
.Sender {
  position: absolute;
  width: 96%;
  bottom: 60px;
}
.Sender span.ant-input-affix-wrapper {
  padding: 11px;
  background: #FFFFFF;
  border: 1px solid #EDF2F7;
  backdrop-filter: blur(5px);
  border-radius: 10px;
}
.char-column {
  position: relative;
  background: #f8f9fc;
}

// .char-column .chat-msg div, .char-column .chat-msg{
//   position: initial !important;
// }

.char-column .Sender {
  position: absolute !important;
}
.Sender button {height: 47px !important;}
.Msg-style ul.ant-list-items li {
  flex-direction: column;
  border: none;
}

.Msg-style ul.ant-list-items li .ant-list-item-meta {
  float: inherit !important;
  width: 100%;
}

.Msg-style ul.ant-list-items li .ant-list-item-meta .ant-list-item-meta-avatar {
  display: flex;
}

.Msg-style .ant-list-item-meta.msg {
  padding: 2px 60px;
  margin-top: -19px;
}

.Msg-style .ant-list-item-meta.msg .ant-list-item-meta-content {
  padding: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #16192C !important;
  background: #FFFFFF;
  border: 0.5px solid #E7E7E7;
  border-radius: 6px 0px 6px 6px;
  max-width: 80% !important;
}
.Msg-style ul.ant-list-items li .ant-list-item-meta h4 span {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 24px;
  color: #909090;
  margin: 0 0 0 10px;
}

.Msg-style .ant-list-item-meta.msg .ant-list-item-meta-content {
  padding: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: #16192C !important;
  background: #FFFFFF;
  border: 0.5px solid #E7E7E7;
  border-radius: 0px 6px 6px 6px;
  max-width: fit-content !important;
}
.Msg-style .ant-list-item-meta.msg .ant-list-item-meta-content {
  flex-direction: row-reverse;
}
.Msg-style .ant-list-item-meta.msg h4.ant-list-item-meta-title {
  padding: 0 11px 0 0;
}
.Msg-style ul .sender .ant-list-item-meta {
  flex-direction: row-reverse;
}

.Msg-style ul .sender .ant-list-item-meta-content {text-align: end;}

.Msg-style ul .sender .ant-list-item-meta-content h4.ant-list-item-meta-title {
  flex-direction: row-reverse;
  display: flex;
  margin-right: 12px;
}

.Msg-style ul .sender .ant-list-item-meta-content h4.ant-list-item-meta-title span {
  margin: 0 12px 0 0;
}

.Msg-style ul .sender .ant-list-item-meta.msg .ant-list-item-meta-content {
  background: #DFE8F3;
  border:none;
}

.Msg-style ul .sender .ant-list-item-meta.msg {
  margin-right: 20px;
}

.Msg-style .ant-list-item-meta.msg  .ant-list-item-meta-description {
  color: #16192C;
}
.chat-msg .Msg-style {
    height: 66vh;
    overflow: auto;
}

.chat-msg .Msg-style::-webkit-scrollbar {
  width: 2px;
}
.chat-msg .Msg-style::-webkit-scrollbar-thumb {
  background: #81d6ff;
}
.Msg-style ul .sender .ant-list-item-meta.msg .ant-list-item-meta-content .ant-list-item-meta-description {
  text-align: start;
}
.Siderbar .rc-virtual-list-holder-inner .ant-list-item-meta-avatar {
  width: 50px;
  height: 50px;
}

.Siderbar .rc-virtual-list-holder-inner .ant-list-item-meta-avatar span {
  width: 100%;
  height: 100%;
}
.main-login {
    height: 100vh;
    display: flex;
    justify-Content: center;
    align-Items: center;
    flex-Direction: column;
    overflow-x:auto;
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  .main-login {
    height: auto;
    padding:30px 0;
    overflow:auto;
  }
  .wel-heading {
    padding: 10px 0;
}
  form#normal_login {
    width: 70%;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  form#normal_login {
    width: 70%;
}
.main-login {
  // height: auto;
  padding:30px 0;
  overflow:auto;
}
}
@media screen and (min-width: 1024px) and (max-width: 1365px) {
  .Sender {
    bottom: 30px;
}
.main-login {
  height: auto;
  padding:30px 0;
}
.wel-heading {
  padding: 20px 0;
}

form#normal_login {
  width: 60%;
}
}

@media screen and (min-width: 1366px) and (max-width: 1600px) {

}

`

export default GlobalStyles

window.G = {
  backendApi: 'http://www.changdu.gov.cn/robotApi',
  questionImportTemplate:
    '/static/user_downloads/question_import_template.xlsx',
  oauth2: {
    sso_server: 'http://wcms.dali.gov.cn:8002/cas/oauth2.0/authorize',
    client_id: 'qaa-robot-cid',
    redirect_uri: 'http://testqaaui.yuntianti.com/login',
    logout:
      'http://wcms.dali.gov.cn:8002/cas/logout?service=http://testqaaui.yuntianti.com/admin',
  },
};

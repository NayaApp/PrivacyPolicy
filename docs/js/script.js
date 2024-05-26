// -------------------------------------
// クラス作成
// -------------------------------------
class SaveData
{
  constructor()
  {
    this.param = new Array();
    this.param[0] = true;
    this.param[1] = false;
  }
}

// -------------------------------------
// グローバル変数
// -------------------------------------
let globalSaveData;
let logMessage;

// -------------------------------------
// ページ読み込み直後の処理
// -------------------------------------
window.onload = function()
{
  logMessage = document.getElementById('logMessage');
  
  let save = new SaveData();
  Log(save.param);
}

// -------------------------------------
// セーブデータの読み込み
// -------------------------------------
function onLoadSaveData()
{
  var saveData = document.getElementById('saveData').value;
  var isError = false;
  logMessage.textContent = saveData;

  if (isError)
  {
    Log('セーブデータの読み込みに失敗しました。');
  }
  else
  {
    Log('セーブデータを読み込みました。');
  }
}

// -------------------------------------
// セーブデータ表示
// -------------------------------------
function onSave()
{
  Log('セーブしました。');
}

// -------------------------------------
// ログ表示
// -------------------------------------
function Log(msg)
{
  if (Array.isArray(msg))
  {
    let tmp = '';
    for (let i = 0; i < msg.length; i++)
    {
      console.log(msg[i]);
      if (i != msg.length - 1)
      {
        tmp += msg[i] + '\n';
      }
      else
      {
        tmp += msg[i];
      }
    }
    
    logMessage.textContent = tmp;
    console.log(tmp);
  }
  else
  {
    logMessage.textContent = msg;
  }
}


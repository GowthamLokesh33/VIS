var apiDetailsinfo = {
  GeneralIVR: {
    CustomerName: {
      Success: {
        200: ["Customer Name : CustomerName"]
      },
      Failure: {
        400: ["Customer Name : CNAF"],
        500: ["Customer Name : CNAF"]
      },
      Exception: {
        100: ["Exception in Customer Name API :"]
      },
    },
    AccountNumberDOB: {
      Success: {
        "200_MultipleAccount": ["Next Action : Multiple_Account"],
        "200_SingleAccount": ["Next Action : Single_Account"]
      },
      Failure: {
        400: ["Next Action : AccountNumberDOB_Failure"],
        500: ["Next Action : AccountNumberDOB_Failure"]
      },
      Exception: {
        100: ["Exception in AccountNumberDOB API :"]
      },
    },
    BalanceEnquiryAccountNumberDOB: {
      Success: {
        200: ["Next Action : BalanceEnquiry_Success"]
      },
      Failure: {
        400: ["Next Action :  BalanceEnquiry_Failure"],
        500: ["Next Action :  BalanceEnquiry_Failure"]
      },
      Exception: {
        100: ["Exception in Balance Enquiry API :"]
      },
    },
    BalanceEnquiryAccountNumberDOBSMS: {
      Success: {
        200: ["Next Action : BalanceEnquirySMS_Success"]
      },
      Failure: {
        400: ["Next Action :  BalanceEnquirySMS_Failure"],
        500: ["Next Action :  BalanceEnquirySMS_Failure"]
      },
      Exception: {
        100: ["Exception in Balance Enquiry SMS API :"]
      },
    },
    MiniStatement: {
      Success: {
        200: ["Next Action : Last5Transactions_Success"]
      },
      Failure: {
        400: ["Next Action :  Last5Transactions_Failure"],
        500: ["Next Action :  Last5Transactions_Failure"]
      },
      Exception: {
        100: ["Exception in Last 5 Transactions API :"]
      },
    },
    MiniStatementSMS: {
      Success: {
        200: ["Next Action : Last5TransactionsSMS_Success"]
      },
      Failure: {
        400: ["Next Action :  Last5TransactionsSMS_Failure"],
        500: ["Next Action :  Last5TransactionsSMS_Failure"]
      },
      Exception: {
        100: ["Exception in Last 5 Transactions SMS API  :"]
      },
    },
    IMPSStatus: {
      Success: {
        200: ["IMPS Next Action : IMPS_Success"]
      },
      Failure: {
        400: ["IMPS Next Action : IMPS_NoData"],
        500: ["IMPS Next Action : IMPS_Failure"]
      },
      Exception: {
        100: ["Exception in IMPS API :"]
      },
    },
    NEFTStatus: {
      Success: {
        200: ["NEFT Next Action : NEFT_Success"]
      },
      Failure: {
        400: ["NEFT Next Action : NEFT_NoData"],
        500: ["NEFT Next Action : NEFT_Failure"]
      },
      Exception: {
        100: ["Exception in NEFT API :"]
      },
    },
    RTGSStatus: {
      Success: {
        200: ["RTGS Next Action : RTGS_Success"]
      },
      Failure: {
        400: ["RTGS Next Action : RTGS_NoData"],
        500: ["RTGS Next Action : RTGS_Failure"]
      },
      Exception: {
        100: ["Exception in RTGS API :"]
      },
    },
    DigitalBlock: {
      Success: {
        "S : 00": ["Next Action : WS_Digit_Blocked"],
      },
      Duplicate: {
        "F : C04945": ["Next Action : WS_Digit_Duplicate"],
      },
      MobileNotLinked: {
        "F : C00899": ["Next Action : WS_Digit_MobileNotLinked"],
      },
      Failure: {
        400: ["Next Action : WS_Digit_Unhandled"],
        500: ["Next Action : WS_Digit_Unhandled"],
      },
      Exception: {
        100: ["Exception in Digital Block Values :"]
      },
    }
  },
  UPI123: {
    GetListKeysString: {
      Success: {
        "00": ["Next Action : GetListKeysString_Success"]
      },
      Failure: {
        "01": ["Next Action : GetListKeysString_Failure"]
      },
      Exception: {
        100: ["Exception in GetListKeysString API :"]
      },
    },
    GetChallenge: {
      Success: {
        "00": ["Next Action : GetChallenge_Success"]
      },
      Failure: {
        "01": ["Next Action : GetChallenge_Failure"]
      },
      Exception: {
        100: ["Exception in GetChallenge API :"]
      },
    },
    GetToken: {
      Success: {
        "00": ["Next Action : GetToken_Success"]
      },
      Failure: {
        "01": ["Next Action : GetToken_Failure"]
      },
      Exception: {
        100: ["Exception in GetToken API :"]
      },
    },
    GetBankDetailsList: {
      Success: {
        "00": ["Next Action : GetBankDetailsList_Success"]
      },
      Failure: {
        "01": ["Next Action : GetBankDetailsList_Failure"]
      },
      Exception: {
        100: ["Exception in GetBankDetailsList API :"]
      },
    },
    GetaccountList: {
      Success: {
        "00": ["Next Action : GetAccountList_Success"]
      },
      Failure: {
        "03": ["Next Action : RemitterBank_NA"],
        "01": ["Next Action : GetAccountList_Failure"]
      },
      Exception: {
        100: ["Exception in GetaccountList API :"]
      },
    },
    CreatePaymentAddress: {
      Success: {
        "00": ["Next Action : CreatePaymentAddress_Success"]
      },
      Failure: {
        "03": ["Next Action : PaymentAddress_AlreadyExists"],
        "01": ["Next Action : CreatePaymentAddress_Failure"]
      },
      Exception: {
        100: ["Exception in CreatePaymentAddress API :"]
      },
    },
    GetAddress: {
      Success: {
        "00": ["Next Action : GetAddress_Success"]
      },
      Failure: {
        "03": ["Next Action : GetAddress_AlreadyTaken"],
        "01": ["Next Action : GetAddress_Failure"]
      },
      Exception: {
        100: ["Exception in GetAddress API :"]
      },
    },
    ReqRegMapperService: {
      Success: {
        "00": ["Next Action : ReqRegMapperService_Success"]
      },
      Failure: {
        "01": ["Next Action : ReqRegMapperService_Failure"]
      },
      Exception: {
        100: ["Exception in ReqRegMapperService API :"]
      },
    },
    GenerateOTP: {
      Success: {
        "00": ["Next Action : GenerateOTP_Success"]
      },
      Failure: {
        "01": ["Next Action : GenerateOTP_Failure"]
      },
      Exception: {
        100: ["Exception in GenerateOTP API :"]
      },
    },
    GenerateOTP: {
      Success: {
        "00": ["Next Action : GenerateOTP_Success"]
      },
      Failure: {
        "01": ["Next Action : GenerateOTP_Failure"]
      },
      Exception: {
        100: ["Exception in GenerateOTP API :"]
      },
    },
    EncryptCredSetPIN: {
      Success: {
        "00": ["Next Action : EncryptCredSetPIN_Success"]
      },
      Failure: {
        "01": ["Next Action : EncryptCredSetPIN_Failure"]
      },
      Exception: {
        100: ["Exception in EncryptCredSetPIN API :"]
      },
    },
    SetUPIPIN: {
      Success: {
        "00": ["Next Action : SetUPIPIN_Success"]
      },
      Failure: {
        "03": ["Next Action : SetUPIPIN_IncorrectDetails"],
        "01": ["Next Action : SetUPIPIN_Failure"]
      },
      Exception: {
        100: ["Exception in SetUPIPIN API :"]
      },
    },
    RegisterUser: {
      Success: {
        "00": ["Next Action : Registration_Success"]
      },
      Failure: {
        "01": ["Next Action : Already_Registered"],
        "Other": ["Next Action : Registration_Failure"]
      },
      Exception: {
        100: ["Exception in RegisterUser API :"]
      },
    },
    EncryptCredPay: {
      Success: {
        "00": ["Next Action : EncryptCredPay_Success"]
      },
      Failure: {
        "01": ["Next Action : EncryptCredPay_Failure"]
      },
      Exception: {
        100: ["Exception in EncryptCredPay API :"]
      },
    },
    UPIFundsTransfer: {
      Success: {
        "00": ["Next Action : SendMoney_Success"]
      },
      Failure: {
        "02": ["Next Action : Insufficient_Balance"],
        "03": ["Next Action : Incorrect_UPIPIN"],
        "04": ["Next Action : PIN_NotSet"],
        "01": ["Next Action : SendMoney_Failure"]
      },
      Exception: {
        100: ["Exception in UPI Funds Transfer API :"]
      },
    },
    EncryptCredSetBE: {
      Success: {
        "00": ["Next Action : EncryptCredSetBE_Success"]
      },
      Failure: {
        "01": ["Next Action : EncryptCredSetBE_Failure"]
      },
      Exception: {
        100: ["Exception in EncryptCredSetBE API :"]
      },
    },
    UPIBalanceEnquiry: {
      Success: {
        "00": ["Next Action : BalanceEnquiry_Success"]
      },
      Failure: {
        "01": ["Next Action : Incorrect_UPIPIN"],
        "04": ["Next Action : PIN_NotSet"],
        "Other": ["Next Action : BalanceEnquiry_Failure"]
      },
      Exception: {
        100: ["Exception in BalanceEnquiry API :"]
      },
    },
    GetTxnHistory: {
      Success: {
        "00": ["Next Action : GetTxnHistory_Success"]
      },
      Failure: {
        "01": ["Next Action : No_TxnHistory"],
        "Other": ["Next Action : GetTxnHistory_Failure"]
      },
      Exception: {
        100: ["Exception in GetTxnHistory API :"]
      },
    },
    DeregisterService: {
      Success: {
        "00": ["Next Action : DeregisterService_Success"]
      },
      Failure: {
        "02": ["Next Action : DeregisterService_Already"],
        "01": ["Next Action : DeregisterService_Failure"]
      },
      Exception: {
        100: ["Exception in DeregisterService API :"]
      },
    },
    EncryptCredUPIPIN: {
      Success: {
        "00": ["Next Action : EncryptCredChangeUPIPIN_Success"]
      },
      Failure: {
        "01": ["Next Action : EncryptCredChangeUPIPIN_Failure"]
      },
      Exception: {
        100: ["Exception in EncryptCredChangeUPIPIN API :"]
      },
    },
    ChangeUPIPIN: {
      Success: {
        "00": ["Next Action : ChangeUPIPIN_Success"]
      },
      Failure: {
        "02": ["Next Action : ChangeUPIPIN_IncorrectUPIPIN"],
        "01": ["Next Action : ChangeUPIPIN_Failure"]
      },
      Exception: {
        100: ["Exception in ChangeUPIPIN API :"]
      },
    }
  }
}

window.onload = function () {
  const selectProject = document.getElementById('tbproject'),
    selectAPI = document.getElementById('tbapi'),
    selectStatus = document.getElementById('tbstatus'),
    selectCode = document.getElementById('tbstatusCode'),
    selectDescription = document.getElementById('tbdescription'),
    selects = document.querySelectorAll('select')

  selectProject.disabled = false
  selectAPI.disabled = true
  selectStatus.disabled = true
  selectCode.disabled = true
  selectDescription.disabled = true

  selects.forEach(select => {
    if (select.disabled == true) {
      select.style.cursor = "auto"
    }
  })

  // Project Change
  for (let proj in apiDetailsinfo) {
    console.log("Project : " + proj)
    selectProject.options[selectProject.options.length] = new Option(proj, proj)
  }

  // API Change
  selectProject.onchange = (e) => {
    selectAPI.disabled = false
    selectStatus.disabled = true
    selectCode.disabled = true
    selectDescription.disabled = true

    selectAPI.length = 1
    selectStatus.length = 1
    selectCode.length = 1
    selectDescription.length = 1

    for (let api in apiDetailsinfo[e.target.value]) {
      console.log("API : " + api)
      selectAPI.options[selectAPI.options.length] = new Option(api, api)
    }
  }

  // Status Change
  selectAPI.onchange = (e) => {
    selectStatus.disabled = false
    selectCode.disabled = true
    selectDescription.disabled = true

    selectStatus.length = 1
    selectCode.length = 1
    selectDescription.length = 1

    for (let status in apiDetailsinfo[selectProject.value][e.target.value]) {
      console.log("Status : " + status)
      selectStatus.options[selectStatus.options.length] = new Option(status, status)
    }
  }

  // Code Change
  selectStatus.onchange = (e) => {
    selectCode.disabled = false
    selectDescription.disabled = true

    selectCode.length = 1
    selectDescription.length = 1

    for (let code in apiDetailsinfo[selectProject.value][selectAPI.value][e.target.value]) {
      console.log("Code : " + code)
      selectCode.options[selectCode.options.length] = new Option(code, code)
    }
  }

  // Description Change
  selectCode.onchange = (e) => {
    selectDescription.disabled = false

    selectDescription.length = 0

    let desc = apiDetailsinfo[selectProject.value][selectAPI.value][selectStatus.value][e.target.value]

    for (let i = 0; i < desc.length; i++) {
      console.log("desc : " + desc)
      selectDescription.options[selectDescription.options.length] = new Option(desc[i], desc[i])
    }
  }
}
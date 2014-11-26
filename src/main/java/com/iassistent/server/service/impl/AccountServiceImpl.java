package com.iassistent.server.service.impl;

import com.google.gson.JsonSyntaxException;
import com.google.gson.reflect.TypeToken;
import com.iassistent.server.dao.AccountDao;
import com.iassistent.server.enities.*;
import com.iassistent.server.result.Result;
import com.iassistent.server.service.AccountService;
import com.iassistent.server.utils.GsonHelper;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.util.CollectionUtils;

import java.lang.reflect.Type;
import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 * Created by lan on 11/24/14.
 */
@Slf4j
public class AccountServiceImpl implements AccountService {

    private AccountDao accountDao;

    @Override
    public Result<RegisterResult> create(String json) {
        Result<RegisterResult> r = Result.newResult();
        try {
            Type type = new TypeToken<List<RegisterEntity>>() {
            }.getType();
            List<RegisterEntity> res = GsonHelper.jsonToList(json, type);

            if(CollectionUtils.isEmpty(res)) {
                r.setStatusCode(404);
                r.setMessage("No register message found");
            }else {
                Account a = new Account();
                RegisterEntity re = res.get(0);

                a.setCreateTime(new Date());
                a.setEmail(re.getEmail());
                //a.setPhoneNumber(re.getPhoneNumber());
                a.setSalt(UUID.randomUUID().toString());
                a.setPassword(hashPassword(re.getPassword(), a.getSalt()));
                a.setSecurityAnswer(re.getSecurityAnswer());
                a.setSecurityQuestionIndex(re.getSecurityQuestionIndex() +"");
                a.setUsername(re.getEmail());
                a.setId(UUID.randomUUID().toString());
                int ret = accountDao.createAccount(a);
                if(ret > 0) {
                    RegisterResult result = new RegisterResult();


                    Device device = new Device();
                    device.setAccountId(a.getId());
                    device.setId(UUID.randomUUID().toString());
                    device.setLastAccessTime(new Date());
                    device.setCreateTime(new Date());
                    device.setPhoneNumber(re.getPhoneNumber());
                    int devRet = accountDao.createDevice(device);
                    //log.info("Create device returns:" + devRet);
                    result.setId(a.getId());
                    result.setPhoneNumber(device.getPhoneNumber());
                    result.setEmail(a.getEmail());
                    result.setAuthToken(UUID.randomUUID().toString());
                    result.setAccountId(a.getId());
                    result.setDeviceId(device.getId());

                    r.setStatusCode(201);
                    r.setCount(1);
                    r.add(result);
                }else {
                    r.setStatusCode(500);
                    r.setMessage("ERROR:Unknown error when create account.");
                }

            }

        }catch(JsonSyntaxException je) {
            r.setMessage("ERROR:" + je.getMessage());
        }catch(Exception e) {
            r.setMessage("ERROR:" + e.getMessage());
        }
        return r;
    }

    public void setAccountDao(AccountDao accountDao) {
        this.accountDao = accountDao;
    }

    private String hashPassword(String password, String salt) {
        return DigestUtils.md5Hex(password + salt);
    }
}

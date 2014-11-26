package com.iassistent.server.service.impl;

import com.google.gson.JsonSyntaxException;
import com.iassistent.server.dao.ActionDao;
import com.iassistent.server.enities.ActionEntity;
import com.iassistent.server.result.Result;
import com.iassistent.server.service.ActionService;
import com.iassistent.server.utils.GsonHelper;
import com.iassistent.server.utils.ID;
import com.iassistent.server.utils.RemoteAddressHelper;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.http.HttpServletRequest;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

/**
 * Created by lan on 11/26/14.
 */
@Slf4j
public class ActionServiceImpl implements ActionService {

    private ActionDao actionDao;

    @Override
    public Result<ActionEntity> create(String json) {
        Result<ActionEntity> r = Result.newResult();
        try {
            ActionEntity ae = GsonHelper.fromJson(json, ActionEntity.class);
            ae.setId(ID.id());
            if (ae.getExpireTime() == null) {
                Calendar cal = new GregorianCalendar(1970,01,02,8,00,00);
                ae.setExpireTime(cal.getTime());
            }
            ae.setStatus(ActionEntity.Status.created.name());
            int ret = actionDao.create(ae);
            if (ret > 0) {
                r.setCount(1);
                r.add(ae);
                r.setStatusCode(201);
            } else {
                r.setCount(0);
                r.setStatusCode(500);
                r.setMessage("ERROR: Unknown error");
            }
        } catch (JsonSyntaxException jse) {
            r.setCount(0);
            r.setStatusCode(500);
            r.setMessage("ERROR:" + jse.getMessage());
            log.error("create get error:" + jse.getMessage());
        } catch (Exception e) {
            r.setCount(0);
            r.setStatusCode(500);
            r.setMessage("ERROR:" + e.getMessage());
            log.error("create get error:" + e.getMessage());
        }
        return r;
    }

    @Override
    public Result<ActionEntity> updateStatus(String json) {
        Result<ActionEntity> r = Result.newResult();
        try {
            ActionEntity ae = GsonHelper.fromJson(json, ActionEntity.class);
            if (StringUtils.isEmpty(ae.getId())) {
                r.setCount(0);
                r.setStatusCode(400);
                r.setMessage("ERROR: id is required");
            } else {
                int ret = actionDao.updateStatus(ae);
                if (ret > 0) {
                    r.setCount(1);
                    r.add(ae);
                    r.setStatusCode(201);
                } else {
                    r.setCount(0);
                    r.setStatusCode(500);
                    r.setMessage("ERROR: Unknown error");
                }
            }

        } catch (JsonSyntaxException jse) {
            r.setCount(0);
            r.setStatusCode(500);
            r.setMessage("ERROR:" + jse.getMessage());
            log.error("create get error:" + jse.getMessage());
        } catch (Exception e) {
            r.setCount(0);
            r.setStatusCode(500);
            r.setMessage("ERROR:" + e.getMessage());
            log.error("create get error:" + e.getMessage());
        }
        return r;
    }

    @Override
    public Result<ActionEntity> updateExtra(String json) {
        Result<ActionEntity> r = Result.newResult();
        try {
            ActionEntity ae = GsonHelper.fromJson(json, ActionEntity.class);
            if (StringUtils.isEmpty(ae.getId())) {
                r.setCount(0);
                r.setStatusCode(400);
                r.setMessage("ERROR: id is required");
            } else {
                int ret = actionDao.updateExtra(ae);
                if (ret > 0) {
                    r.setCount(1);
                    r.add(ae);
                    r.setStatusCode(201);
                } else {
                    r.setCount(0);
                    r.setStatusCode(500);
                    r.setMessage("ERROR: Unknown error");
                }
            }

        } catch (JsonSyntaxException jse) {
            r.setCount(0);
            r.setStatusCode(500);
            r.setMessage("ERROR:" + jse.getMessage());
            log.error("create get error:" + jse.getMessage());
        } catch (Exception e) {
            r.setCount(0);
            r.setStatusCode(500);
            r.setMessage("ERROR:" + e.getMessage());
            log.error("create get error:" + e.getMessage());
        }
        return r;
    }

    @Override
    public Result<ActionEntity> updateStatusAndExtra(String json) {
        Result<ActionEntity> r = Result.newResult();
        try {
            ActionEntity ae = GsonHelper.fromJson(json, ActionEntity.class);
            if (StringUtils.isEmpty(ae.getId())) {
                r.setCount(0);
                r.setStatusCode(400);
                r.setMessage("ERROR: id is required");
            } else {
                int ret = actionDao.updateStatusAndExtra(ae);
                if (ret > 0) {
                    r.setCount(1);
                    r.add(ae);
                    r.setStatusCode(201);
                } else {
                    r.setCount(0);
                    r.setStatusCode(500);
                    r.setMessage("ERROR: Unknown error");
                }
            }
        } catch (JsonSyntaxException jse) {
            r.setCount(0);
            r.setStatusCode(500);
            r.setMessage("ERROR:" + jse.getMessage());
            log.error("create get error:" + jse.getMessage());
        } catch (Exception e) {
            r.setCount(0);
            r.setStatusCode(500);
            r.setMessage("ERROR:" + e.getMessage());
            log.error("create get error:" + e.getMessage());
        }
        return r;
    }

    @Override
    public Result<ActionEntity> byId(String id) {
        Result<ActionEntity> r = Result.newResult();
        try {
            if (StringUtils.isEmpty(id)) {
                r.setCount(0);
                r.setStatusCode(400);
                r.setMessage("ERROR: id is required");
            } else {
                ActionEntity ae = actionDao.byId(id);
                if (ae != null) {
                    r.setCount(1);
                    r.add(ae);
                    r.setStatusCode(201);
                } else {
                    r.setCount(0);
                    r.setStatusCode(500);
                    r.setMessage("ERROR: Unknown error");
                }
            }
        } catch (Exception e) {
            r.setCount(0);
            r.setStatusCode(500);
            r.setMessage("ERROR:" + e.getMessage());
            log.error("create get error:" + e.getMessage());
        }
        return r;
    }

    @Override
    public Result<ActionEntity> retrieve(String id, HttpServletRequest req) {
        Result<ActionEntity> r = Result.newResult();
        try {
            if (StringUtils.isEmpty(id)) {
                r.setCount(0);
                r.setStatusCode(400);
                r.setMessage("ERROR: id is required");
            } else {
                ActionEntity ae = actionDao.byId(id);
                if (ae != null) {
                    ae.setStatus(ActionEntity.Status.retrieved.name());
                    String ip = RemoteAddressHelper.getRemoteIpFrom(req);
                    ae.addExtra(ActionEntity.Extra.ip, ip);
                    int ret = actionDao.updateStatusAndExtra(ae);
                    if (ret > 0) {
                        r.setCount(1);
                        r.add(ae);
                        r.setStatusCode(201);
                    } else {
                        r.setCount(0);
                        r.setStatusCode(500);
                        r.setMessage("ERROR: Unknown error");
                    }
                } else {
                    r.setCount(0);
                    r.setStatusCode(404);
                    r.setMessage("ERROR: Not found.");
                }
            }
        } catch (Exception e) {
            r.setCount(0);
            r.setStatusCode(500);
            r.setMessage("ERROR:" + e.getMessage());
            log.error("create get error:" + e.getMessage());
        }
        return r;
    }

    @Override
    public Result<ActionEntity> finish(String id) {
        Result<ActionEntity> r = Result.newResult();
        try {
            if (StringUtils.isEmpty(id)) {
                r.setCount(0);
                r.setStatusCode(400);
                r.setMessage("ERROR: id is required");
            } else {
                ActionEntity ae = actionDao.byId(id);
                if (ae != null) {
                    ae.setStatus(ActionEntity.Status.finished.name());
                    int ret = actionDao.updateStatus(ae);
                    if (ret > 0) {
                        r.setCount(1);
                        r.add(ae);
                        r.setStatusCode(201);
                    } else {
                        r.setCount(0);
                        r.setStatusCode(500);
                        r.setMessage("ERROR: Unknown error");
                    }
                } else {
                    r.setCount(0);
                    r.setStatusCode(404);
                    r.setMessage("ERROR: Not found.");
                }
            }
        } catch (Exception e) {
            r.setCount(0);
            r.setStatusCode(500);
            r.setMessage("ERROR:" + e.getMessage());
            log.error("create get error:" + e.getMessage());
        }
        return r;
    }

    @Override
    public Result<ActionEntity> responded(String id, String json) {
        Result<ActionEntity> r = Result.newResult();
        try {
            ActionEntity ae = GsonHelper.fromJson(json, ActionEntity.class);
            if (StringUtils.isEmpty(ae.getId())) {
                ae.setId(id);
            }
            int ret = actionDao.updateStatusAndExtra(ae);
            if (ret > 0) {
                r.setCount(1);
                r.add(ae);
                r.setStatusCode(201);
            } else {
                r.setCount(0);
                r.setStatusCode(500);
                r.setMessage("ERROR: Unknown error");
            }
        } catch (JsonSyntaxException jse) {
            r.setCount(0);
            r.setStatusCode(500);
            r.setMessage("ERROR:" + jse.getMessage());
            log.error("create get error:" + jse.getMessage());
        } catch (Exception e) {
            r.setCount(0);
            r.setStatusCode(500);
            r.setMessage("ERROR:" + e.getMessage());
            log.error("create get error:" + e.getMessage());
        }
        return r;
    }

    public void setActionDao(ActionDao actionDao) {
        this.actionDao = actionDao;
    }
}

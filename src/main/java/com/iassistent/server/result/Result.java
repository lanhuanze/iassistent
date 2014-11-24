package com.iassistent.server.result;

import com.google.common.collect.Lists;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;
import java.util.List;

/**
 * Created by lan on 11/21/14.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Result<T> {
    private int statusCode = 200;
    private String message = "OK";
    private int count;
    private List<T> objects = Lists.newArrayList();

    public boolean add(T t) {
        boolean ret =  objects.add(t);
        count = objects.size();
        return ret;
    }

    public boolean addAll(Collection<T> all) {
        boolean ret =  objects.addAll(all);
        count  = objects.size();
        return ret;
    }

    public static <E> Result<E> newResult() {
        return new Result();
    }
}

package com.braincorelab.drgabrielcubillos.notification;

public interface NotificationEvent {

    void action(String action);

    void destroy();
}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['controller/toolbarController', 'model/toolbarModel', 'model/sportModel', 'controller/sportController'], function() {

        App.Component.SportCompo =({
        name: 'sport',
        model: App.Model.SportModel,
        listModel: App.Model.SportList,
        controller : App.Controller.SportController
    });
        return App.Component.SportCompo;
   
});
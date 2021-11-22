export default {
  required_validator_message: 'Поле обязательно для заполнения',

  login_label_name: 'Имя',
  login_label_pass: 'Пароль',
  login_submit: 'Войти',
  login_error: 'Не удалось выполнить вход',

  menu_logout: 'Выход',
  menu_change_password: 'Смена пароля',
  menu_home: 'Главная',
  menu_devices: 'Устройства',
  menu_users: 'Пользователи',
  menu_projects: 'Проекты',
  menu_live: 'Live',

  main_title: 'Мои устройства',

  change_password_title: "Смена пароля",
  change_password_label_previous_password: "Старый пароль",
  change_password_label_new_password: "Новый пароль",
  change_password_label_new_password_confirm: "Подтвердите новый пароль",
  change_password_error: 'Не удалось сменить пароль',
  change_password_passwrd_validation_error: 'Новый пароль должен совпадать',
  change_password_btn_submit: 'Сохранить',

  admin_device_list_title: 'Устройства (Админ)',
  admin_device_list_label_name: 'Имя',
  admin_device_list_label_action: 'Действие',
  admin_device_list_btn_add: 'Добавить',
  admin_device_list_delete_error: 'Ошибка удаления устройства',

  admin_user_list_title: 'Пользователи (Админ)',
  admin_user_list_label_name: 'Имя',
  admin_user_list_label_action: 'Действие',
  admin_user_list_btn_add: 'Добавить',
  admin_user_list_delete_error: 'Ошибка удаления пользователя',

  admin_user_device_list_title: 'Пользователь',

  admin_project_list_title: 'Проекты (Админ)',
  admin_project_list_label_name: 'Имя',
  admin_project_list_label_action: 'Действие',
  admin_project_list_btn_add: 'Добавить',
  admin_project_list_delete_error: 'Ошибка удаления проекта',

  admin_project_user_list_title: 'Project',

  create_device_title: 'Добавить устройство',
  create_device_label_name: 'Имя',
  create_device_error: 'Не удалось добавить устройство',
  create_device_label_user: 'Владелец',
  create_device_btn_submit: 'Добавить',

  create_user_title: 'Добавить пользователя',
  create_user_label_name: 'Имя',
  create_user_label_password: 'Пароль',
  create_user_label_role: 'Роль',
  create_user_label_project: 'Проект',
  create_user_error: 'Не удалось добавить пользователя',
  create_user_btn_submit: 'Добавить',

  edit_user_title: 'Редактировать польователя',
  edit_user_label_name: 'Имя',
  edit_user_label_password: 'Пароль',
  edit_user_label_role: 'Роль',
  edit_user_label_project: 'Проект',
  edit_user_error: 'Не удалось изменить пользователя',
  edit_user_btn_submit: 'Сохранить',

  create_project_title: 'Добавить проект',
  create_project_label_name: 'Название',
  create_project_error: 'Не удалось добавить проект',
  create_project_btn_submit: 'Добавить',

  edit_project_title: 'Редактировать проект',
  edit_project_label_name: 'Название',
  edit_project_error: 'Не удалось изменить проект',
  edit_project_btn_submit: 'Сохранить',

  loadable_view_default_error_text: 'Не удалось загрузить данные',
  loadable_view_default_btn_reload: 'Попробовать снова',

  selector_default_no_data: "Данные отсутствуют",
  selector_default_no_match: "Совпадения отсутствуют",
  selector_default_placeholder: "Выбрать",

  edit_device_title: "Изменить имя",
  edit_device_error: "Не удалось изменить имя",
  edit_device_btn_submit: "Сохранить",

  route_selection_error: "Не удалось загрузить данные маршрута",
  route_selection_trimmed_warning: "Часть маршрута не была подгружена. Слишком много данных за этот период.",
  route_selection_title: "Маршрут",
  route_selection_label_from: 'С',
  route_selection_label_to: 'По',
  route_selection_submit: 'Поиск',

  device_detail_loading: 'Загрузка...',
  device_detail_active_label: 'Активирован',
  device_detail_error: 'Не удалось загрузить данные об устройстве',
  device_detail_try_again: 'Попробовать снова',
  device_detail_not_active: '<span class="el-alert__title">Устройство еще не активировано. Для активации необходимо ввести код <b>{code}</b>.</span>',

  device_management_title: 'Управление',
  device_management_error_issue_code: "Не удалось выпустить код активации",
  device_management_error_clear: "Не удалось очистить историю местоположений",
  device_management_issue_code: 'Выпустить код',
  device_management_clear: 'Очистить',
  device_management_dialog_text: 'Вы уверены что хотите очистить все данные?',
  device_management_dialog_title: 'Предупреждение',
  device_management_dialog_confirm_button: 'Подтвердить',
  device_management_dialog_cancel_button: 'Отмена',

  device_ownership_title: 'Управление доступом',
  device_ownership_access_level_user: 'ПОЛЬЗОВАТЕЛЬ',
  device_ownership_access_level_owner: 'ВЛАДЕЛЕЦ',
  device_ownership_add_button: 'Добавить',
  device_ownership_change_access_level_error: 'Не удалось изменить уровень доступа',
  device_ownership_delete_error: 'Не удалось отключить доступ',
  device_ownership_load_error: 'Не удалось загрузить список доступа',
  device_ownership_reload_button: 'Повторить',

  device_ownership_remove_dialog_title: 'Предупреждение',
  device_ownership_remove_dialog_text: 'Вы уверены что хотите убрать свой доступ?',
  device_ownership_remove_dialog_confirm_button: 'Подтвердить',
  device_ownership_remove_dialog_cancel_button: 'Отмена',

  device_ownership_change_dialog_title: 'Предупреждение',
  device_ownership_change_dialog_text: 'Вы уверены что хотите изменить свой уровень доступа?',
  device_ownership_change_dialog_confirm_button: 'Подтвердить',
  device_ownership_change_dialog_cancel_button: 'Отмена',

  device_create_ownership_title: 'Дать доступ',
  device_create_ownership_user_label: 'Пользователь',
  device_create_ownership_access_level_label: 'Уровень доступа',
  device_create_ownership_submit_button: 'Добавить',
  device_create_ownership_error: 'Не удалось дать доступ',

  live_title: 'Live',
  live_button_add: 'Добавить',
}

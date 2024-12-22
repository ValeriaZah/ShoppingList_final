import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
resources: {
    en: {
        translation: {
            //AddItemForm
            addNewList: "Add New Shopping List",
            title: "Title:",
            tag: "Tags (comma-separated):",
            add: "Add",
            cancel: "Cancel", 
            addItem: "Add Item",
            addMember: "Add Member",
            //Dashboard
            titleShoppingList: "Your Shopping Lists",
            addNewList: "Add New Shopping List",
            // ItemField
            name: "Name:",
            date: "Date:",
            //MemberManagment
            member: "Members",
            remove: "Remove",
            addByEmail: "Add member by email",
            add: "Add",
            //NotificationPanel
            notification: "Notifications",
            ignore: "Ignore",
            accept: "Accept",
            //ShoppingItem
            delete: "Delete",
            unresolve: "'Unresolve'",
            resolve: "'Resolve'",
            //ShoppingListCard
            detail: "View Details",
            // Login
            login: "Login",
            notLogined: "Don't have an account?",
            registerHere: "Register here",
            // Register
            register: "Register",
            namePlaceholder: "Name",
            emailPlaceholder: "Email",
            passwordPlaceholder: "Password",
            registerButton: "Register",
            registrationSuccess: "Registration successful! Redirecting to login...",
            registrationFail: "Registration failed. Please try again.",
            alreadyHaveAccount: "Already have an account?",
            loginHere: "Login here",
            // ShoppingListDetail
            shoppingListTitle: "Shopping List",
            loading: "Loading...",
            deleteList: "Delete List",
            addNewItem: "Add New Items",
            inviteMembers: "Invite Members",
            addItemHeader: "Add Item",
            updateButton: "Update",
            cancelButton: "Cancel",
            addMemberHeader: "Add Member",
            errorFetchingList: "Error fetching shopping list details",
            listDeleted: "Shopping List deleted!",
            errorCreatingItems: "Error creating new items.",
            errorInvitingMembers: "Error inviting new members.",
            // ShoppingListOverview
            shoppingLists: "Shopping Lists",
            errorFetchingLists: "Error fetching shopping lists",
        },
    },
    cs: {
        translation: {
            //AddItemForm
            addNewList: "Přidat nový nákupní seznam",
            title: "Title:",
            tag: "Tagy (oddělené čárkou):",
            add: "Přidat",
            cancel: "Zrušit", 
            addItem: "Přidat položku",
            addMember: "Přidat člena",
            //Dashboard
            titleShoppingList: "Vaše nákupní seznamy",
            addNewList: "Přidat nový seznam",
            // ItemField
            name: "Název",
            date: "Datum",
            //MemberManagment
            member: "Členové",
            remove: "Odstranit",
            addByEmail: "Přidat člena e-mailem",
            add: "Přidat",
            //NotificationPanel
            notification: "Oznámení",
            ignore: "Ignorovat",
            accept: "Přijmout",
            //ShoppingItem
            delete: "Smazat",
            unresolve: "'Nevyřešeno'",
            resolve: "'Vyřešeno'",
            //ShoppingListCard
            detail: "Zobrazit podrobnosti",
            // Login
            login: "Přihlášení",
            notLogined: "Nemáte účet?",
            registerHere: "Zaregistrujte se zde",
             //Register
            register: "Registrace",
            namePlaceholder: "Jméno",
            emailPlaceholder: "E-mail",
            passwordPlaceholder: "Heslo",
            registerButton: "Registrovat",
            registrationSuccess: "Registrace byla úspěšná! Přesměrování na přihlášení...",
            registrationFail: "Registrace selhala. Zkuste to prosím znovu.",
            alreadyHaveAccount: "Máte již účet?",
            loginHere: "Přihlaste se zde",
            // ShoppingListDetail
            shoppingListTitle: "Nákupní seznam",
            loading: "Načítání...",
            deleteList: "Smazat seznam",
            addNewItem: "Přidat nové položky",
            inviteMembers: "Pozvat členy",
            addItemHeader: "Přidat položku",
            updateButton: "Aktualizovat",
            cancelButton: "Zrušit",
            addMemberHeader: "Přidat člena",
            errorFetchingList: "Chyba při načítání podrobností nákupního seznamu",
            listDeleted: "Nákupní seznam byl smazán!",
            errorCreatingItems: "Chyba při vytváření nových položek.",
            errorInvitingMembers: "Chyba při pozvání nových členů.",
            // ShoppingListOverview
            shoppingLists: "Nákupní seznamy",
            errorFetchingLists: "Chyba při načítání nákupních seznamů",
        },
        },
        ru: {
            translation: {
            //AddItemForm
            addNewList: "Добавить новый список покупок",
            title: "Название:",
            tag: "Теги (через запятую):",
            add: "Добавить",
            cancel: "Отмена",
            addItem: "Добавить элемент",
            addMember: "Добавить участника",
            //Dashboard
            titleShoppingList: "Ваши списки покупок",
            addNewList: "Добавить новый список покупок",
            // ItemField
            name: "Название:",
            date: "Дата:",
            //MemberManagment
            member: "Участники",
            remove: "Удалить",
            addByEmail: "Добавить участника по email",
            add: "Добавить",
            //NotificationPanel
            notification: "Уведомления",
            ignore: "Игнорировать",
            accept: "Принять",
            //ShoppingItem
            delete: "Удалить",
            unresolve: "Снять отметку",
            resolve: "Отметить как выполнено",
            //ShoppingListCard
            detail: "Посмотреть детали",
            // Login
            login: "Войти",
            notLogined: "Нет аккаунта?",
            registerHere: "Зарегистрируйтесь здесь",
            // Register
            register: "Регистрация",
            namePlaceholder: "Имя",
            emailPlaceholder: "Email",
            passwordPlaceholder: "Пароль",
            registerButton: "Зарегистрироваться",
            registrationSuccess: "Регистрация успешна! Перенаправление на вход...",
            registrationFail: "Регистрация не удалась. Попробуйте ещё раз.",
            alreadyHaveAccount: "Уже есть аккаунт?",
            loginHere: "Войдите здесь",
            // ShoppingListDetail
            shoppingListTitle: "Список покупок",
            loading: "Загрузка...",
            deleteList: "Удалить список",
            addNewItem: "Добавить новые элементы",
            inviteMembers: "Пригласить участников",
            addItemHeader: "Добавить элемент",
            updateButton: "Обновить",
            cancelButton: "Отмена",
            addMemberHeader: "Добавить участника",
            errorFetchingList: "Ошибка при загрузке деталей списка покупок",
            listDeleted: "Список покупок удалён!",
            errorCreatingItems: "Ошибка при создании новых элементов.",
            errorInvitingMembers: "Ошибка при приглашении участников.",
            // ShoppingListOverview
            shoppingLists: "Списки покупок",
            errorFetchingLists: "Ошибка при загрузке списков покупок",
        },
    },
},
 lng: "en", // Default language
    fallbackLng: "cs",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false, // React already escapes strings
  },
});

export default i18n;
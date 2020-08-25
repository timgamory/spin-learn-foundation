# Name: Yasiris Ortiz
# Class: 113

class Person():  # super class
    def __init__(self, name, age, gender):  # initializer
        self.name = name
        self.age = age
        self.gender = gender

    def __str__(self):
        return 'Name : {} Age : {} Gender : {}'.format(self.name, self.age, self.gender)


# MallEmployees : first subclass of Person
class MallEmployees(Person):  # MallEmployees is composed of Mall()
    def __init__(self, name, age, gender, idNo, salary, jobDescription):
        super().__init__(name, age, gender)  # overriding
        # new attributes for this class
        self.idNo = idNo
        self.salary = salary
        self.jobDescription = jobDescription

    def getInfo(self):  # get information
        print("Showing the information of the MallEmployees class...")
        print("Owner's Name : {} \nAge : {} \nGender : {} \nID : {}  \nSalary : {} \nJobDescription : {} ".format(
            self.name, self.age, self.gender,
            self.idNo, self.salary, self.jobDescription))


class Mall():  # Mall is composed of shops and owner
    def __init__(self, no_of_shops, managerName):
        self.no_of_shops = no_of_shops  # Attributes for this subclass
        self.managerName = managerName

    def display(self):
        print("Number of Shops : {} \nManager's Name : {}".format(self.no_of_shops, self.managerName))

# Owner: second subclass of Person
class Owner(Person):  # owner is composed of Mall()
    def __init__(self, name, age, gender, email):  # should I replace ownerName by name ?
        super().__init__(name, age, gender)

        self.email = email  # new attributes for this subclass
        self.obj_mall = Mall()


    def getInfo(self):
        print("Showing the information of the Owner class...")
        print(
            "Owner's Name : {} \nAge : {} \nGender : {} \nEmail : {} ".format(self.name, self.age, self.gender, self.email))


class MallParking():  # MallParking is composed of Mall()
    def __init__(self, total_Space, space_Available, space_Filled):
        self.total_Space = total_Space  # Attributes of subclass MallParking
        self.space_Available = space_Available
        self.space_Filled = space_Filled

    def showSpaceLeft(self):
        return self.space_Available


class Shops:  # Shops is composed of Customer()
    def __init__(self, attribute, attribute2, attribute3, attribute4):
        self.attribute = attribute
        self.attribute2 = attribute2
        self.attribute3 = attribute3
        self.attribute4 = attribute4

        self.obj_number_of_shops = Mall(no_of_shops=)


    def getInfo(self):
        print("Print output")


# Customer: third subclass of Person
class Customer(Person):
    def __init__(self, name, age, gender, telephone, itemPurchased):
        super().__init__(name, age, gender)

        # new attributes for Customer subclass
        self.telephone = telephone
        self.itemPurchased = itemPurchased

    def getInfo(self):
        print("Showing the information of the Customer class...")


class Items():  # Items is composed of Shop()
    def __init__(self, itemName, itemPrice):
        self.itemName = itemName
        self.itemPrice = itemPrice

        self.obj_customer = Customer(itemPurchased=)

class Payments:  # Payments is composed of Shops()
    def __init__(self, billNo, date, totalBill):
        self.billNo = billNo  # Mall()
        self.date = date
        self.totalBill = totalBill

    def cashReceived(self):
        return self.totalBill

    def cashReturned(self):
        return

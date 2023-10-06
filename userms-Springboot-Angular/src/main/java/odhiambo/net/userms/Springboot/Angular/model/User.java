package odhiambo.net.userms.Springboot.Angular.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity 
@Table(name = "users_table")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id; // Primary Key
  
    @Column
    private String firstName;
  
    @Column
    private String middleName;

    @Column
    private String  lastName;

    @Column
    private String  gender;

    @Column
    private String username;

    @Column
    private String email;
  
    @Column
    private String password;

    
    public int getId() {
        return id;
      }
    
      public void setId(int id) {
        this.id = id;
      }
    
      public String getFirstName() {
        return firstName;
      }
    
      public void setFirstName(String firstName) {
        this.firstName = firstName;
      }

      public String getMiddleName(){
        return  middleName;
      }
    
      public void setMiddleName(String middleName){
        this.middleName = middleName;
      }

      public String getLastName() {
        return lastName;
      }

      public void setLastName(String lastName) {
        this.lastName = lastName;
      }

          public String getGender(){
        return gender;
      }

      public void setGender(String gender){
        this.gender = gender;
      }
    
      public String getUsername() {
        return username;
      }
    
      public void setUsername(String username) {
        this.username = username;
      }
    
      public String getEmail(){
        return email;
      }

      public void setEmail(String email){
        this.email = email;
      }

      public String getPassword() {
        return password;
      }
    
      public void setPassword(String password) {
        this.password = password;
      }
    
      @Override
      public String toString() {
        return "UserVO [id=" + id + ", firstName=" + firstName + ", middleName=" + middleName +", lastName=" + lastName + ", gender=" + gender + ", username=" + username
            + ",email= "+ email +", password=" + password + "]";
      }
    
    }

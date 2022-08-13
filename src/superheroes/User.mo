import AID "./Utils/AccountId";
import Array "mo:base/Array";
import HashMap "mo:base/HashMap";
import Time "mo:base/Time";

module {
    public type UserInfo = {
        username: Text;   
        cccd: Text;
        school: Nat;
        birthday: Text;
        image: Text;
        description: Text;
    };
}
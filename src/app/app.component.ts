import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  list = [
    {
      id: 1,
      first_name: "Farand",
      last_name: "Sweeny",
      email: "fsweeny0@lulu.com",
      gender: "Female",
      ip_address: "194.238.246.100"
    },
    {
      id: 2,
      first_name: "Tobe",
      last_name: "Skehens",
      email: "tskehens1@disqus.com",
      gender: "Female",
      ip_address: "5.219.175.156"
    },
    {
      id: 3,
      first_name: "Thorin",
      last_name: "Plante",
      email: "tplante2@weibo.com",
      gender: "Male",
      ip_address: "70.64.83.117"
    },
    {
      id: 4,
      first_name: "Ana",
      last_name: "Govinlock",
      email: "agovinlock3@guardian.co.uk",
      gender: "Female",
      ip_address: "136.112.97.168"
    },
    {
      id: 5,
      first_name: "Jason",
      last_name: "Brinkley",
      email: "jbrinkley4@twitter.com",
      gender: "Male",
      ip_address: "150.221.156.14"
    },
    {
      id: 6,
      first_name: "Josi",
      last_name: "Steventon",
      email: "jsteventon5@ehow.com",
      gender: "Female",
      ip_address: "226.61.249.159"
    },
    {
      id: 7,
      first_name: "Aron",
      last_name: "McDiarmid",
      email: "amcdiarmid6@linkedin.com",
      gender: "Male",
      ip_address: "196.137.120.39"
    }
  ];
  onDrop(dragidex, dropindex) {
   this.list= this.array_move(this.list,dragidex,dropindex)
  }
  array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; 
};
}

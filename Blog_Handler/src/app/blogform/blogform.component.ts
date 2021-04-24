import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogformComponent implements OnInit {
  categorys=['C','C++','C-sharp'];
  constructor(private service:BlogService) { }
  ngOnInit(): void {
  }
  insert(blog){
    console.log("inserting....");
    this.service.addBlog(blog);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.less']
})
export class FormsComponent implements OnInit {

  //一、手动创建
  // 1、单表单输入
  // name = new FormControl('');
  // 2、表单组输入,两个输入项：firstName, lastName
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl('')
  // })


  // 二、表单构建器FormBuilder(比手动构建简单明了)
  // FormBuilder 服务有三个方法：control()、group() 和 array()。
  // 这些方法都是工厂方法，用于在组件类中分别生成 FormControl、FormGroup 和 FormArray。
  // 每个控件名对应的值都是一个数组，这个数组中的第一项是其初始值，第二项和第三项提供同步和异步验证器。
  name = this.formBuilder.control('')
  // profileForm = this.formBuilder.group({
  //   firstName: [''],
  //   lastName: ['']
  // })

  // 三、表单校验
  // profileForm = this.formBuilder.group({
  //   firstName: ['', Validators.required],
  //   lastName: ['']
  // })

  // 四、动态管理表单控件个数
  // FormArray 是 FormGroup 之外的另一个选择，用于管理任意数量的匿名控件。
  // 你可以往 FormArray 中动态插入和移除控件，并且 FormArray 实例的值和验证状态也是根据它的子控件计算得来的。不需要为每个控件定义一个名字作为 key
  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    aliases: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });

  // 相对于重复使用 profileForm.get() 方法获取每个实例的方式，getter 可以让你轻松访问表单数组各个实例中的别名。
  // 换言之 另一种写法为 profileForm.get('aliases')
  // get aliases() {
  //   return this.profileForm.get('aliases') as FormArray;
  // }
  aliases = <FormArray>this.profileForm.get('aliases');

  // 用 FormArray.push() 方法把该控件添加为数组中的新条目
  addAlias() {
    console.log(this.aliases);
    this.aliases.push(this.formBuilder.control(''));
  }


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  updateName(): void {
    console.log(this.name);
    this.name.setValue('Nancy');
  }

  onSubmit() {
    console.log(this.profileForm);
  }

  /**
   * 设置值的两种方式：
   * setValue() 方法来为单个控件设置新值。 setValue() 方法会严格遵循表单组的结构，并整体性替换控件的值。
   * patchValue() 方法可以用对象中所定义的任何属性为表单模型进行替换。
   */
  updateProfile() {
    this.profileForm.setValue({
      firstName: 'Nancy',
      lastName: ''
    });

    this.profileForm.patchValue({
      firstName: 'Nancy'
    });
  }
}

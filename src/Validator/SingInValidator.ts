import * as Yup from 'yup';
import Validator from './Validator';

class SingInValidator extends Validator {
  private schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
  });

  async validate(formRef, data, postFunction) {
    return super.validate(this.schema, formRef, data, postFunction);
  }
}

export default new SingInValidator();

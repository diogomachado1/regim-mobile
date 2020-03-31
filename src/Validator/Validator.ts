import * as Yup from 'yup';

export default class Validator {
  // eslint-disable-next-line class-methods-use-this
  async validate(schema, formRef, data, postFunction) {
    try {
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });
      postFunction(data);
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }
}

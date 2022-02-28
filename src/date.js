exports.getDay = () => {
    const today = new Date();
    const options = {
      week: 'long',
      day: 'numeric',
      month: 'long',
    };
    return  today.toLocaleDateString('pt-BR', options);
};
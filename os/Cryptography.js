import bcrypt from "bcryptjs";

export async function DoCrypto() {
    let clearPasswords = ["nElgZM", "FLjWoJ3vgsw3", "07c$-fju", "6pDA5ORYZISzXU", "Iu9tFK@" ,"l$rIiQ!W",
                    "I1ogFHX#N9w@w-LZgedna!X$l", "AQOrajd2yrY", "uvg-B42E", "2XN4CiWSa9", "!TWB@JRi8D",
                    "G@@2s2a", "AwLEQzsGtzO", "}A)T$*Do_tuY'T0S*}a3+A*13as=92kq/_VlkeKtGF&C~tv>"];
    let allTimeDuration = 0;
    for(let i = 0; i < 13; i++) {
        let startTime = Date.now();
        const salt = await bcrypt.genSalt(3);
        const hash = await bcrypt.hash(clearPasswords[i], salt);
        let duration = Date.now() - startTime;
        allTimeDuration +=duration;
        console.log(`Прошло миллисекунд: ${duration}`);
    }
    console.log(`Общее потраченное время на выполнение: ${allTimeDuration}\nТак как данные операции выполнялись асинхронно, то есть, программа могла в это время продолжать работать и операции создания соли и пароля не блокировали поток`);
}
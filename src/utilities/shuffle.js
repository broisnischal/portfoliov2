// import Git from '../../assets/stickers/git.png';
// import One01 from '../../assets/stickers/1001.png';
// import Blender from '../../assets/stickers/blender.png';
// import csharp from '../../assets/stickers/csharp.png';
// import code from '../../assets/stickers/code.png';
// import flutter from '../../assets/stickers/flutter.png';
// import github from '../../assets/stickers/github.png';
// import js from '../../assets/stickers/js.png';
// import node from '../../assets/stickers/node.png';
// import php from '../../assets/stickers/php.png';
// import ps from '../../assets/stickers/ps.png';
// import python from '../../assets/stickers/python.png';
// import react from '../../assets/stickers/react.png';
// import redux from '../../assets/stickers/redux.png';
// import rust from '../../assets/stickers/rust.png';
// import spread from '../../assets/stickers/spread.png';
// import ts from '../../assets/stickers/ts.png';

const suffle = () => {
    const assets = [
        { image: '../../assets/stickers/git.png' },
        { image: '../../assets/stickers/1001.png' },
        { image: '../../assets/stickers/blender.png' },
        { image: '../../assets/stickers/csharp.png' },
        { image: '../../assets/stickers/flutter.png' },
        { image: '../../assets/stickers/github.png' },
        { image: '../../assets/stickers/js.png' },
        { image: '../../assets/stickers/node.png' },
        { image: '../../assets/stickers/php.png' },
        { image: '../../assets/stickers/python.png' },
        { image: '../../assets/stickers/redux.png' },
        { image: '../../assets/stickers/react.png' },
    ];
    return [...assets, ...assets]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));
};

export default suffle;
